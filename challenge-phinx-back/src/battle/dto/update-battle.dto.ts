import { PartialType } from '@nestjs/mapped-types';
import { BattleDto } from './create-battle.dto';

export class UpdateBattleDto extends PartialType(BattleDto) {}
