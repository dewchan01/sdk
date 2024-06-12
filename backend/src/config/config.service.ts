import { Injectable } from '@nestjs/common';

export interface IDBConfig {
  DB_TYPE: any;
  DB_DATABASE: string;
  DB_SYNC: boolean;
  DB_LOGGING: boolean;
  DB_RUNMIGRATION?: boolean;
  DB_HOST?: string;
  DB_PORT?: number;
  DB_USER?: string;
  DB_PASSWORD?: string;
}

@Injectable()
export class ConfigService {
  private readonly databaseConfig: any;
  private readonly serverConfig: any;
  private readonly jwtConfig: any;
  private readonly argv: any;

  constructor() {
    const env = process.env.NODE_ENV || 'development';

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    this.databaseConfig = require('../config/config.json')[env.trim()];
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    this.serverConfig = require('../config/server.json')[env.trim()];
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    this.jwtConfig = require('../config/jwt.json')[env.trim()];
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    this.argv = require('minimist')(process.argv.slice(2));
    if (this.argv.production) {
      process.env.NODE_ENV = 'production';
    }
  }

  public get serverPort(): number {
    return Number(process.env.APP_PORT || this.serverConfig.port || 3200);
  }

  public get dbConfig(): IDBConfig {
    return {
      DB_TYPE: process.env.TYPEORM_CONNECTION || this.databaseConfig.type,
      DB_USER: process.env.TYPEORM_USERNAME || this.databaseConfig.username,
      DB_PASSWORD: process.env.TYPEORM_PASSWORD || this.databaseConfig.password,
      DB_HOST:
        process.env.TYPEORM_HOST || this.databaseConfig.host || undefined,
      DB_PORT:
        process.env.TYPEORM_PORT || this.databaseConfig.port || undefined,
      DB_DATABASE: process.env.TYPEORM_DATABASE || this.databaseConfig.database,
      DB_SYNC:
        process.env.TYPEORM_SYNCHRONIZE ||
        this.databaseConfig.synchronize ||
        false,
      DB_LOGGING:
        process.env.TYPEORM_LOGGING || this.databaseConfig.logging || false,
      DB_RUNMIGRATION:
        process.env.TYPEORM_MIGRATIONS_RUN ||
        this.databaseConfig.migrationsRun ||
        false,
    };
  }

  public get jwtSecret(): string {
    return process.env.JWT_SECRET || this.jwtConfig.secret || undefined;
  }

  public environment(): string {
    const env = process.env.NODE_ENV || 'development';
    return env;
  }
}
