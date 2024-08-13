import { Module } from '@nestjs/common';
import { BattleService } from './battle.service';
import { BattleController } from './battle.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BattleResult } from 'src/battle-result/entities/battle-result.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([BattleResult]),  // Importar el repositorio
  ],
  controllers: [BattleController],
  providers: [BattleService],
})
export class BattleModule {}
