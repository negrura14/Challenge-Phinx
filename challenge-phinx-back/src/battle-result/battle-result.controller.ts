import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BattleResultService } from './battle-result.service';
import { CreateBattleResultDto } from './dto/create-battle-result.dto';
import { UpdateBattleResultDto } from './dto/update-battle-result.dto';

@Controller('battle-result')
export class BattleResultController {
  constructor(private readonly battleResultService: BattleResultService) {}

  @Post()
  create(@Body() createBattleResultDto: CreateBattleResultDto) {
    return this.battleResultService.create(createBattleResultDto);
  }

  @Get()
  findAll() {
    return this.battleResultService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.battleResultService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBattleResultDto: UpdateBattleResultDto) {
    return this.battleResultService.update(+id, updateBattleResultDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.battleResultService.remove(+id);
  }
}
