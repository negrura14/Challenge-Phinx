import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Pokemon } from "src/pokemon/entities/pokemon.entity";

@Entity()
export class BattleResult {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Pokemon)
    poke1: Pokemon;

    @ManyToOne(() => Pokemon)
    poke2: Pokemon;

    @Column()
    winner: string;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
    blattleDate: Date;
}
