import { DataSource } from 'typeorm';
import { Pokemon } from './pokemon/entities/pokemon.entity';
import {CreatePokemonTable1723431306360} from './migrations/1723431306360-CreatePokemonTable'
import { SeedPokemons1723430119915 } from './migrations/1723430119915-SeedPokemons';
import { CreateBattleResult1723434952489} from './migrations/1723434952489-CreateBattleResult'

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'database.sqlite',
  entities: [Pokemon],
  migrations: [CreatePokemonTable1723431306360, SeedPokemons1723430119915, CreateBattleResult1723434952489],
  synchronize: true,
});