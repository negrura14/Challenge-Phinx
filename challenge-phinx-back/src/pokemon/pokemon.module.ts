import { Module } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemon } from './entities/pokemon.entity';
import { BattleResult } from 'src/battle-result/entities/battle-result.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pokemon, BattleResult])],
  controllers: [PokemonController],
  providers: [PokemonService],
  exports: [PokemonService],
  
})
export class PokemonModule {}
