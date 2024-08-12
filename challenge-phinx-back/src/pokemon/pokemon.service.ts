import { BadRequestException, Get, Injectable } from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pokemon } from './entities/pokemon.entity';
import { Repository } from 'typeorm';
import { BattleResult } from 'src/battle-result/entities/battle-result.entity';

@Injectable()
export class PokemonService {
  constructor(
    @InjectRepository(Pokemon)
    private pokemonRepository: Repository<Pokemon>,

    @InjectRepository(BattleResult)
    private battleResultRepository: Repository<BattleResult>
  ) {}
  
  findAll(): Promise<Pokemon[]>{
    return this.pokemonRepository.find()
  }
  
  //* Manejar las batallas

  async battle(poke1Id: number, poke2Id: number ) : Promise<string> {
    const poke1 = await this.pokemonRepository.findOneBy({id: poke1Id});
    const poke2 = await this.pokemonRepository.findOneBy({id: poke2Id});

    if (!poke1 || !poke2) {
      throw new BadRequestException('Pokemon no encontrado');
    }

    const poke1Power = poke1.attack - poke2.defense;
    const poke2Power = poke2.attack - poke1.defense;

    const winner = poke1Power > poke2Power ? poke1.name : poke2.name;

    const battleResult = new BattleResult();
    battleResult.poke1 = poke1;
    battleResult.poke2 = poke2;
    battleResult.winner = winner;
    await this.battleResultRepository.save(battleResult)

    return winner;

  }
}
