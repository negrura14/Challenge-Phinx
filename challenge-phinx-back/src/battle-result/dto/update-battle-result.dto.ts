import { PartialType } from '@nestjs/mapped-types';
import { CreateBattleResultDto } from './create-battle-result.dto';

export class UpdateBattleResultDto extends PartialType(CreateBattleResultDto) {}
