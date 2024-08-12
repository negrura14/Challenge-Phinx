import './home.css'
import { Button, Typography, Container } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { PokemonCards } from '../components/pokemonCards/PokemonCards';
import { usePokemon } from '../context/pokemonContext';

export function Home() {
    const pokemon = usePokemon()

    return (

        <Container >
            <Container>
                <Typography variant="h3" component="h1" sx={{ marginBottom: '20px', marginTop: '30px', textAlign: 'left' }}>
                    Battle of Pokemon
                </Typography>

                <Typography variant="h4" component="h1" sx={{ marginBottom: '2px', marginTop: '30px', textAlign: 'left' }}>
                    Select your pokemon
                </Typography>
            </Container>

            <Container sx={{
                
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center', 
                gap: '20px', 
                padding: '20px 0',

            }}>
                {pokemon.map(p => (

                    <PokemonCards
                        name={p.name}
                        img={p.imageUrl}
                        sx={{
                            
                            width: '200px',
                            height: '200px', 
                            marginRight: '4px', 
                        }}
                    />

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
                    marginTop: '8px'
                }}>
                <Typography variant="h5" component="h1" sx={{ textAlign: 'left' }}>
                    Pokemon wins!
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
                {/* Primera tarjeta de Pokémon seleccionado */}

                <PokemonCards
                    img={pokemon[0]?.imageUrl} 
                    name={pokemon[0]?.name} 
                    hp={pokemon[0]?.hp}
                    attack={pokemon[0]?.attack}
                    defense={pokemon[0]?.defense}
                    speed={pokemon[0]?.speed}
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
                        marginTop: '0', 
                        paddingBottom: '10px' 
                    }}

                />


                {/* Botón para iniciar la batalla */}
                <Button
                    variant="contained"
                    color="success"

                    sx={{
                        width: '200px',
                        height: '500px',
                        margin: '0 20px',
                        marginLeft: '45px',
                        marginRight: '45px',
                        height: 'fit-content',
                        textTransform: 'none',
                        background: '#33691e',
                        fontSize: '24px', 
                        borderRadius: 2,
                    }}
                    onClick={() => {/* Lógica para iniciar la batalla */ }}
                >
                    Start Battle
                </Button>

                {/* Segunda tarjeta de Pokémon seleccionado */}

                <PokemonCards
                    name={pokemon[1]?.name} 
                    img={pokemon[1]?.imageUrl}
                    hp={pokemon[1]?.hp}
                    attack={pokemon[1]?.attack}
                    defense={pokemon[1]?.defense}
                    speed={pokemon[1]?.speed}
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
                />

            </Container>
        </Container>

    )

}