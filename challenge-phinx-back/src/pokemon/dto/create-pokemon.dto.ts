import { IsNotEmpty } from 'class-validator';

export class CreatePokemonDto {

    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    type: string;

    @IsNotEmpty()
    speed: number;

    @IsNotEmpty()
    attack: number;

    @IsNotEmpty()
    defense: number;

    @IsNotEmpty()
    hp: number;

    @IsNotEmpty()
    imageUrl: string;

    
}
