import React from 'react';
import { usePokemon } from '../../context/pokemonContext';
import { PokemonCards } from '../pokemonCards/PokemonCards'; // Ajusta la ruta según sea necesario

export default function PokemonList() {
    const pokemon = usePokemon();

    return (

        <Grid >
            {pokemon.map((p) => (
                <Grid item key={p.name}>
                    <PokemonCards name={p.name} type={p.type} img={p.img} />
                </Grid>
            ))}
        </Grid>
    );
}