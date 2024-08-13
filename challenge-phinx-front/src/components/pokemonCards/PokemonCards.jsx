
import React from 'react';
import { Card, CardContent, Typography, CardMedia, LinearProgress } from '@mui/material';
import { Link } from 'react-router-dom';

export function PokemonCards({ name, imageUrl, attack, defense, hp, speed, type, sx, imgSx, nameSx }) {

    const getProgressBarValue = (value) => Math.min(Math.max(value, 1), 10) / 10;

    return (
        <Card sx={{
            flexDirection: 'column',
            display: 'flex',
            justifyContent: 'space-between', boxShadow: 6,
            borderRadius: '10px',
            transition: 'box-shadow 0.3s ease-in-out',
            '&:hover': {
                boxShadow: 16,
            },
            ...sx,
        }}>
            <CardMedia
                component="img"
                image={imageUrl}
                alt={`${name} img`}
                sx={{
                    objectFit: 'contain',
                    height: '140px',
                    width: '100%',
                    ...imgSx,

                }}
            />
            <CardContent sx={{ textAlign: 'left', padding: '14px' }}>
                <Typography gutterBottom variant="h5" component="div" sx={{ ...nameSx }}>
                    {name}
                </Typography>
                {/* {type && (
                    <Typography variant="body2" sx={{ marginBottom: '8px' }}>
                        Type: {type}
                    </Typography>
                )} */}
                {hp && (
                    <div>

                        <Typography variant="body2" >
                            HP
                        </Typography>
                        <LinearProgress
                            variant="determinate"
                            value={getProgressBarValue(hp) * 100}
                            sx={{
                                height: '10px', 
                                borderRadius: '5px', 
                                marginBottom: '8px',
                                backgroundColor: '#e0e0e0', 
                                
                                '& .MuiLinearProgress-bar': {
                                    backgroundColor: '#76ff03'
                                }
                            }}
                        />
                    </div>
                )}
                {attack && (
                    <div>
                        <Typography variant="body2" >
                            Attack
                        </Typography>
                        <LinearProgress
                            variant="determinate"
                            value={getProgressBarValue(attack) * 100}
                            sx={{
                                height: '10px', 
                                borderRadius: '5px', 
                                marginBottom: '8px',
                                backgroundColor: '#e0e0e0', 
                                
                                '& .MuiLinearProgress-bar': {
                                    backgroundColor: '#76ff03'
                                }
                            }}
                        />
                    </div>
                )}
                {defense && (
                    <div>
                        <Typography variant="body2" >
                            Defense
                        </Typography>
                        <LinearProgress
                            variant="determinate"
                            value={getProgressBarValue(defense) * 100}
                            sx={{
                                height: '10px', 
                                borderRadius: '5px', 
                                marginBottom: '8px',
                                backgroundColor: '#e0e0e0', 
                                
                                '& .MuiLinearProgress-bar': {
                                    backgroundColor: '#76ff03'
                                }
                            }}
                        />
                    </div>
                )}

                {speed && (
                    <div>
                    <Typography variant="body2" >
                        Speed
                    </Typography>
                    <LinearProgress
                            variant="determinate"
                            value={getProgressBarValue(speed) * 100}
                            sx={{
                                height: '10px', 
                                borderRadius: '5px', 
                                marginBottom: '8px',
                                backgroundColor: '#e0e0e0', 
                                
                                '& .MuiLinearProgress-bar': {
                                    backgroundColor: '#76ff03'
                                }
                            }}
                        />
                    </div>
                )}
            </CardContent>
        </Card>
    );
}