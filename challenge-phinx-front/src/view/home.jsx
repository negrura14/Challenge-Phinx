
import './home.css'
import { Button, Typography, Container } from '@mui/material';
import { PokemonCards } from '../components/pokemonCards/PokemonCards';
import { usePokemon } from '../context/pokemonContext';
import axios from 'axios';
import { useState } from 'react';
import defaultImage from '../assets/SiluetaPokemon2.png';
import { typeAdvantages } from '../components/battle/advantages';

export function Home() {
    const pokemon = usePokemon();
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [opponentPokemon, setOpponentPokemon] = useState(null);
    const [battleWinner, setBattleWinner] = useState('');
    

    const hasAdvantage = (pokemon1, pokemon2) => {
        const advantage = typeAdvantages[pokemon1.type];
        return advantage?.strongAgainst === pokemon2.type;
    };

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
        if (!selectedPokemon) return;

        const availablePokemon = pokemon.filter(p => p.name !== selectedPokemon.name);
        const randomOpponent = availablePokemon[Math.floor(Math.random() * availablePokemon.length)]
        setOpponentPokemon(randomOpponent)
    
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

    const renderPokemonCard = (pokemon, isSelected, hasAdvantage) => (
        <PokemonCards
        {...pokemon}
        imageUrl={pokemon?.imageUrl || defaultImage}
        hasAdvantage={hasAdvantage}
            
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
                    justifyContent: { xs: 'center', sm: 'center', md: 'flex-start' },
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
                                width: { xs: '150px', sm: '180px', md: '200px' },
                                height: { xs: '160px', sm: '180px', md: '200px' },
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
                    width: { xs: '100%', sm: '94%' },
                    backgroundColor: '#e0f7fa',
                    border: '2px solid #424242',
                    boxShadow: 6,
                    borderRadius: '6px',
                    padding: '20px',
                    marginTop: '8px',
                    textAlign: { xs: 'center', sm: 'left' },
                }}
            >
                <Typography variant="h5" component="h1" >
                    {battleWinner ? `${battleWinner} wins!` : 'Select two Pokémon to battle'}
                </Typography>
            </Container>

            <Container
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '30px',
                }}
            >
                {renderPokemonCard(selectedPokemon || {}, !!selectedPokemon, 
                    selectedPokemon && opponentPokemon && hasAdvantage(selectedPokemon, opponentPokemon)
                )}
                <Button
                    variant="contained"
                    color="success"
                    sx={{
                        width: { xs: '150px', sm: '180px', md: '200px' },
                        margin: { xs: '10px', sm: '20px', md: '0 20px' },
                        fontSize: { xs: '16px', sm: '20px', md: '24px' },
                        textTransform: 'none',
                        background: '#33691e',
                        borderRadius: 2,
                    }}
                    onClick={handleBattle}
                    disabled={!selectedPokemon}
                >
                    Start Battle
                </Button>
                {renderPokemonCard(opponentPokemon || {}, !!opponentPokemon,
                    opponentPokemon && selectedPokemon && hasAdvantage(opponentPokemon, selectedPokemon)
                )}
            </Container>

        </Container>
    );
}