import React, { useState, useEffect } from 'react';
import './App.css'
import axios from 'axios';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [showPokemon, setShowPokemon] = useState(false);

  useEffect(() => {
    if (showPokemon) {
      axios
        .get('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then((response) => {
          const names = response.data.results.map((pokemon) => pokemon.name);
          setPokemonList(names);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  }, [showPokemon]); 

  return (
    <div className="App">
      <button onClick={() => setShowPokemon(!showPokemon)}>
        Open Pokemon List
      </button>
      {showPokemon && (
        <ul>
          {pokemonList.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
