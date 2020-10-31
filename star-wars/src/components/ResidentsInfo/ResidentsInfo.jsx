import React, { useState, useEffect } from 'react';

export const ResidentsInfo = ({ residents }) => {
  const [persons, setPersons] = useState([]);
  
  useEffect(() => {
    residents.forEach(resident => {
      fetch(resident)
        .then(response => response.json())
        .then(array => setPersons(current => [...current, array.name]))
    });

    return () => {
      setPersons([])
    };
  }, [residents]);

  return (
    <>
      <p>Residents:</p>
      <ul>
        {persons.map(person => (
          <li key={person}>
            {person}
          </li>
        ))}
      </ul>
    </>
  );
};
