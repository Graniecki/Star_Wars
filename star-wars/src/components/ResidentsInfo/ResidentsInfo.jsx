import React, { useState, useEffect } from 'react';

//component fetch information about
//persons who lives on specific planet
export const ResidentsInfo = ({ residents }) => {
  const [persons, setPersons] = useState([]);

  {/*fetching data from server about each resident */}
  useEffect(() => {
    residents.forEach(resident => {
      fetch(resident)
        .then(response => response.json())
        .then(array => setPersons(current => [...current, array.name]))
    });

    {/*after unmounting clear info about residents */}
    return () => {
      setPersons([])
    };
    {/*updating only if residents array will be changed */}
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
