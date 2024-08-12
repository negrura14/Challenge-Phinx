import { Controller, Get, Param, Post } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Pokemon } from './entities/pokemon.entity';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  findAll(): Promise<Pokemon[]> {
    return this.pokemonService.findAll();
  }

  @Post('battle/:poke1Id/:poke2Id')
  battle(
    @Param('poke1Id') poke1Id: number,
    @Param('poke2Id') poke2Id: number,
  ): Promise<string> {
    return this.pokemonService.battle(poke1Id, poke2Id)
  }
}
