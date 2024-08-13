

import './home.css'
import { Button, Typography, Container } from '@mui/material';
import { PokemonCards } from '../components/pokemonCards/PokemonCards';
import { usePokemon } from '../context/pokemonContext';
import axios from 'axios';
import { useState } from 'react';
import defaultImage from '../assets/SiluetaPokemon2.png';

export function Home() {
    const pokemon = usePokemon();
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [opponentPokemon, setOpponentPokemon] = useState(null);
    const [battleWinner, setBattleWinner] = useState('');

    const handleSelectPokemon = (p) => {
        if (selectedPokemon && selectedPokemon.name === p.name) {
            setSelectedPokemon(null);
        } else if (opponentPokemon && opponentPokemon.name === p.name) {
            setOpponentPokemon(null);
        } else if (!selectedPokemon) {
            setSelectedPokemon(p);
        } else if (!opponentPokemon) {
            setOpponentPokemon(p);
        }
    };

    const handleBattle = async () => {
        if (!selectedPokemon || !opponentPokemon) return;
    
        try {
            const response = await axios.post('/battle', {
                pokemon1: selectedPokemon,
                pokemon2: opponentPokemon,
            });
    
            const result = response.data;
            setBattleWinner(result.winner);
        } catch (error) {
            console.error('Error in battle:', error);
            alert('There was an issue with the battle. Please try again.');
        }
    };

    const renderPokemonCard = (pokemon, isSelected) => (
        <PokemonCards
        {...pokemon}
        imageUrl={pokemon?.imageUrl || defaultImage}
            
            sx={{
                width: '400px',
                height: '450px',
            }}
            imgSx={{
                height: '200px',
                width: '100%',
            }}
            nameSx={{
                fontSize: '28px',
            }}
            style={{
                border: isSelected ? '2px solid #ff9800' : 'none',
            }}
        />
    );

    return (
        <Container>
            <Container>
                <Typography variant="h3" component="h1" sx={{ marginBottom: '20px', marginTop: '30px', textAlign: 'left' }}>
                    Battle of Pokemon
                </Typography>

                <Typography variant="h4" component="h1" sx={{ marginBottom: '2px', marginTop: '30px', textAlign: 'left' }}>
                    Select your pokemon
                </Typography>
            </Container>

            <Container
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '20px',
                    padding: '20px 0',
                }}
            >
                {pokemon.map((p) => (
                    <div key={p.name} onClick={() => handleSelectPokemon(p)}>
                        <PokemonCards
                            name={p.name}
                            imageUrl={p.imageUrl}
                            sx={{
                                width: '194px',
                                height: '200px',
                                marginRight: '4px',
                                cursor: 'pointer',
                                border:
                                    selectedPokemon?.name === p.name ||
                                    opponentPokemon?.name === p.name
                                        ? '2px solid #ff9800'
                                        : 'none',
                            }}
                        />
                    </div>
                ))}
            </Container>

            <Container
                sx={{
                    height: '70px',
                    width: '95%',
                    backgroundColor: '#e0f7fa',
                    border: '2px solid #424242',
                    boxShadow: 6,
                    borderRadius: '6px',
                    padding: '20px',
                    marginTop: '8px',
                }}
            >
                <Typography variant="h5" component="h1" sx={{ textAlign: 'left' }}>
                    {battleWinner ? `${battleWinner} wins!` : 'Select two Pokémon to battle'}
                </Typography>
            </Container>

            <Container
                sx={{
                    display: 'flex',
                    justifyContent: 'left',
                    alignItems: 'center',
                    marginTop: '30px',
                }}
            >
                {renderPokemonCard(selectedPokemon || {}, !!selectedPokemon)}
                <Button
                    variant="contained"
                    color="success"
                    sx={{
                        width: '200px',
                        margin: '0 20px',
                        marginLeft: '45px',
                        marginRight: '45px',
                        height: 'fit-content',
                        textTransform: 'none',
                        background: '#33691e',
                        fontSize: '24px',
                        borderRadius: 2,
                    }}
                    onClick={handleBattle}
                    disabled={!selectedPokemon || !opponentPokemon}
                >
                    Start Battle
                </Button>
                {renderPokemonCard(opponentPokemon || {}, !!opponentPokemon)}
            </Container>

        </Container>
    );
}