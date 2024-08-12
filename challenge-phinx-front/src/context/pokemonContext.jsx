import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const PokemonContext = createContext();

export function PokemonProvider({ children }) {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios.get('/pokemon')
      .then(response => setPokemon(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <PokemonContext.Provider value={pokemon}>
      {children}
    </PokemonContext.Provider>
  );
}

export function usePokemon() {
  return useContext(PokemonContext);
}