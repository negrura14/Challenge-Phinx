
import { Injectable } from '@nestjs/common';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { BattleResult } from 'src/battle-result/entities/battle-result.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BattleService {
    private readonly typeAdvantages = {
        Fire: { strongAgainst: 'Grass', weakAgainst: 'Water' },
        Water: { strongAgainst: 'Fire', weakAgainst: 'Electric' },
        Grass: { strongAgainst: 'Water', weakAgainst: 'Fire' },
        Electric: { strongAgainst: 'Water', weakAgainst: 'Grass' },
        Normal: { strongAgainst: null, weakAgainst: 'Electric' },
    }

    constructor(
        @InjectRepository(BattleResult)
        private battleResultRepository: Repository<BattleResult>
    ) {}

  async battle(pokemon1: Pokemon, pokemon2: Pokemon): Promise<any> {
    //* Clonar pokemon
    const p1 = { ...pokemon1 };
    const p2 = { ...pokemon2 };

    //* Ordenar los Pokémon por velocidad
    let [first, second] = this.getOrderBySpeed(p1, p2);

    //* Batalla
    while (p1.hp > 0 && p2.hp > 0) {
        
        const attacker = first;
        const defender = second;

        const baseDamage = Math.max(1, attacker.attack - defender.defense);
        const typeModifier = this.getTypeModifier(attacker.type, defender.type)
        const damage = Math.max(1, Math.floor(baseDamage * typeModifier));
        defender.hp = Math.max(0, defender.hp - damage);

        //* Cambio de turno
        [first, second] = [second, first];
    }

    //* Ganador
    const winner = p1.hp > 0 ? p1 : p2;
    const loser = p1.hp > 0 ? p2 : p1;

    const battleResult = this.battleResultRepository.create({
        poke1: pokemon1,
        poke2: pokemon2,
        winner: winner.name,
        blattleDate: new Date(),
    })

    await this.battleResultRepository.save(battleResult);

    return { winner: winner.name, loser: loser.name };
  }

  private getOrderBySpeed(pokemon1: Pokemon, pokemon2: Pokemon): [Pokemon, Pokemon] {
    if (pokemon1.speed > pokemon2.speed) {
        return [pokemon1, pokemon2];
    } else if (pokemon1.speed < pokemon2.speed) {
        return [pokemon2, pokemon1];
    } else {
        //* Si la velocidad es igual, comparar el ataque
        if (pokemon1.attack > pokemon2.attack) {
            return [pokemon1, pokemon2];
        } else {
            return [pokemon2, pokemon1];
        }
    }
  }
  //*Calcular los daños con tipo
  private getTypeModifier(attackerType: string, defenderType: string): number{
    const advantage = this.typeAdvantages[attackerType];
    if(advantage.strongAgainst === defenderType){
        return 2; //* Daño doble si tiene ventaja
    } else if (advantage.weakAgainst === defenderType) {
        return 0.5; //*Daño dividido si tiene desventaja
    } else {
        return 1;
    }
  }
}
