import { useState } from 'react';

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newFilter, setNewFilter] = useState('');
  //const [searchPerson, setSearchPerson] = useState('');

  const addPerson = (event) => {
    event.preventDefault();

    const personObject = {
      name: newName,
      number: newNumber,
    };

    const same = persons.some(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );
    if (!same) {
      setPersons(persons.concat(personObject));
      setNewName('');
      setNewNumber('');
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

  /*const handleSearchPerson = (event) => {
    console.log(event.target.value);
    setSearchPerson(event.target.value);

    const value = event.target.value;
    const lowerCaseValue = value.toLowerCase();
    const filtered = persons.filter((person) =>
      person.name.toLowerCase().includes(lowerCaseValue)
    );

    setFilteredPersons(filtered);
  };*/

  return (
    <>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={newFilter} onChange={handleNewFilter} />
      </div>
      <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNewNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filteredContacts.length > 0 ? (
        filteredContacts.map((person) => (
          <p key={person.name}>
            {person.name} {person.number}
          </p>
        ))
      ) : (
        <p>No contacts found</p>
      )}
    </>
  );
}

export default App;
