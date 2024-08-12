import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatePokemonTable1723431306360 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
      CREATE TABLE pokemon (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(255) NOT NULL,
        attack INTEGER NOT NULL,
        defense INTEGER NOT NULL,
        hp INTEGER NOT NULL,
        speed INTEGER NOT NULL,
        type VARCHAR(50) NOT NULL,
        imageUrl VARCHAR(255) NOT NULL
      )
    `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
