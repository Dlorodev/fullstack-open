import { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import axios from 'axios';
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
    if (!same) {
      personService.createPerson(personObject).then((response) => {
        setPersons(persons.concat(response));
        setNewName('');
        setNewNumber('');
      });
    } else {
      alert(`${newName} is already added to the phonebook`);
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
      <Persons contacts={filteredContacts} />
    </>
  );
}

export default App;
