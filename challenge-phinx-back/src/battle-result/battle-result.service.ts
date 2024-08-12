import { Injectable } from '@nestjs/common';
import { CreateBattleResultDto } from './dto/create-battle-result.dto';
import { UpdateBattleResultDto } from './dto/update-battle-result.dto';

@Injectable()
export class BattleResultService {
  create(createBattleResultDto: CreateBattleResultDto) {
    return 'This action adds a new battleResult';
  }

  findAll() {
    return `This action returns all battleResult`;
  }

  findOne(id: number) {
    return `This action returns a #${id} battleResult`;
  }

  update(id: number, updateBattleResultDto: UpdateBattleResultDto) {
    return `This action updates a #${id} battleResult`;
  }

  remove(id: number) {
    return `This action removes a #${id} battleResult`;
  }
}
