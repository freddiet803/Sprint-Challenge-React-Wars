import React, { useState, useEffect } from 'react';
import StarWarsCard from './StarWarsCard.js';
import axios from 'axios';
import { Button } from 'reactstrap';

export default function StarWarsDisplay() {
  const [characters, setCharacters] = useState([]);
  const [numCharacters, setNumCharacters] = useState('');
  const [clickyState, setClicky] = useState(false);

  const pages = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

  useEffect(() => {
    async function getCharacters() {
      try {
        if (clickyState === false) {
          const charInfo = await axios.get('https://swapi.co/api/people/');
          setCharacters(charInfo.data.results);
        } else {
          const charInfo = await axios.get(
            `https://swapi.co/api/people/?page=${numCharacters}`
          );
          setCharacters(charInfo.data.results);

        }
      } catch (err) {
        console.log(err);
      }
    }

    getCharacters();

    return () => {
      //would clean events
    };
  }, [clickyState, numCharacters]);

  return (
    <div>
      <div>
        {characters.map(charac => {
          return <StarWarsCard person={charac} />;
        })}
      </div>
      <div>
        {pages.map(num => {
          console.log(num);
          return (
            <Button
              onClick={() => {
                setNumCharacters(num);
                setClicky(true);
              }}
            >
              {num}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
