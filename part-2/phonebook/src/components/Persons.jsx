/* eslint-disable react/prop-types */

const Persons = ({ contacts, handleDelete }) => {
  return (
    <>
      {contacts.length > 0 ? (
        contacts.map((person) => (
          <p key={person.id}>
            {person.name} {person.number}
            <button onClick={() => handleDelete(person)}>delete</button>
          </p>
        ))
      ) : (
        <p>No contacts found</p>
      )}
    </>
  );
};

export default Persons;
