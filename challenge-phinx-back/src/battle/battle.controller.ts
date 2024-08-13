import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BattleService } from './battle.service';
import { BattleDto } from './dto/create-battle.dto';
import { UpdateBattleDto } from './dto/update-battle.dto';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';

@Controller('battle')
export class BattleController {
  constructor(private readonly battleService: BattleService) {}

  @Post()
  async startBattle(@Body() battleDto: BattleDto) {
    console.log('Received Pokemon 1:', battleDto.pokemon1);
    console.log('Received Pokemon 2:', battleDto.pokemon2);
    return this.battleService.battle(battleDto.pokemon1, battleDto.pokemon2);
  }
}
