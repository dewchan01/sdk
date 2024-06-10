import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, DynamicModule } from '@nestjs/common';
import { ConfigModule } from '../../config/config.module';
import { ConfigService } from '../../config/config.service';

function databaseModule(): DynamicModule {
  return TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (config: ConfigService) => {
      return {
        type: config.dbConfig.DB_TYPE,
        password: config.dbConfig.DB_PASSWORD,
        username: config.dbConfig.DB_USER,
        host: config.dbConfig.DB_HOST,
        port: config.dbConfig.DB_PORT,
        database: config.dbConfig.DB_DATABASE,
        synchronize: config.dbConfig.DB_SYNC,
        entities: ['dist/**/**.entity{.ts,.js}', 'src/**/**.entity{.ts,.js}'],
        cli: {
          migrationsDir: 'migration',
        },
      };
    },
  });
}

@Module({
  imports: [databaseModule()],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
