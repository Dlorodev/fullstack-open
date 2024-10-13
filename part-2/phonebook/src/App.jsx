import { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personService from './services/personService';

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newFilter, setNewFilter] = useState('');

  useEffect(() => {
    personService.getAll().then((initialResponse) => {
      setPersons(initialResponse);
    });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();

    const personObject = {
      name: newName,
      number: newNumber,
      /*id:
        persons.length > 0
          ? Math.max(...persons.map((person) => person.id)) + 1
          : 1,*/
    };
    const same = persons.some(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );

    if (same) {
      const actualPerson = persons.find((p) => p.name === newName);
      const confirm = window.confirm(
        `${actualPerson.name} is already in your phonebook, replace old number with a new one?`
      );
      if (confirm) {
        personService
          .updatePerson(actualPerson.id, personObject)
          .then((response) => {
            //console.log('Contact updated!!', response.data);
            setPersons(
              persons.map((p) => (p.id !== actualPerson.id ? p : response.data))
            );
          });
      }
    } else {
      personService.createPerson(personObject).then((response) => {
        setPersons(persons.concat(response));
        setNewName('');
        setNewNumber('');
      });
    }
  };

  const handleNewName = (event) => {
    //console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNewNumber = (event) => {
    //console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  const handleNewFilter = (event) => {
    setNewFilter(event.target.value);
  };

  const handleDelete = (person) => {
    const confirm = window.confirm(
      `do you really want to delete ${person.name}?`
    );
    if (confirm) {
      personService
        .deletePerson(person.id)
        .then((/*response*/) => {
          //console.log('Contact deleted!', response.data);
          setPersons(
            filteredContacts.filter((contact) => contact.id !== person.id)
          );
        })
        .catch((error) => console.error('Error deleting the contact', error));
    }
  };

  const filteredContacts = persons.filter((person) =>
    person.name.toLowerCase().includes(newFilter.toLowerCase())
  );

  return (
    <>
      <h2>Phonebook</h2>
      <Filter value={newFilter} onChange={handleNewFilter} />
      <h3>Add a new</h3>
      <PersonForm
        onSubmit={addPerson}
        nameValue={newName}
        numberValue={newNumber}
        nameOnChange={handleNewName}
        numberOnChange={handleNewNumber}
      />
      <h3>Numbers</h3>
      <Persons contacts={filteredContacts} handleDelete={handleDelete} />
    </>
  );
}

export default App;
