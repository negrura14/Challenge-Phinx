import { IsNotEmpty } from "class-validator";
import { CreatePokemonDto } from "src/pokemon/dto/create-pokemon.dto";

export class BattleDto {
    @IsNotEmpty()
    pokemon1: CreatePokemonDto;

    @IsNotEmpty()
    pokemon2: CreatePokemonDto;
}