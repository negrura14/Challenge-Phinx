import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonModule } from './pokemon/pokemon.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BattleResultModule } from './battle-result/battle-result.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [__dirname + `/**/*.entity.{ts,js}`],
      synchronize: true,
    }),
    PokemonModule,
    BattleResultModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
