import { Module } from '@nestjs/common';
import { BattleResultService } from './battle-result.service';
import { BattleResultController } from './battle-result.controller';

@Module({
  controllers: [BattleResultController],
  providers: [BattleResultService],
})
export class BattleResultModule {}
