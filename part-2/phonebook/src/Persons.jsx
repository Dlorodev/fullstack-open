/* eslint-disable react/prop-types */

const Persons = ({ contacts }) => {
  return (
    <>
      {contacts.length > 0 ? (
        contacts.map((person) => (
          <p key={person.name}>
            {person.name} {person.number}
          </p>
        ))
      ) : (
        <p>No contacts found</p>
      )}
    </>
  );
};

export default Persons;
