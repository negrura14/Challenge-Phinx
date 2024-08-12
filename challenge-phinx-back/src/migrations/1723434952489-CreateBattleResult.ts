import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateBattleResult1723434952489 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            (`
                CREATE TABLE battle_result (
                  id INTEGER PRIMARY KEY AUTOINCREMENT,
                  pokemon1Id INTEGER,
                  pokemon2Id INTEGER,
                  winner VARCHAR(255),
                  battleDate DATETIME DEFAULT CURRENT_TIMESTAMP,
                  FOREIGN KEY (pokemon1Id) REFERENCES pokemon(id),
                  FOREIGN KEY (pokemon2Id) REFERENCES pokemon(id)
                )
              `)
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
