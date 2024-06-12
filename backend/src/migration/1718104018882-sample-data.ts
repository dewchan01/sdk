import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class SampleData1718104018882 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'sample-data',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: 'column1',
            type: 'varchar',
            length: '255',
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            isNullable: false,
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            isNullable: false,
          },
          {
            name: 'deletedAt',
            type: 'timestamp',
            isNullable: true,
          },
        ],
      }),
    );
    if (queryRunner.connection.options.type === 'postgres') {
      await queryRunner.query(
        'ALTER TABLE ONLY "public". "sample-data" ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP',
      );
      await queryRunner.query(
        'ALTER TABLE ONLY "public". "sample-data" ALTER COLUMN "updatedAt" SET DEFAULT CURRENT_TIMESTAMP',
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('sample-data');
  }
}
