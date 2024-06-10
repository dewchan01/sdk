import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { SampleDatabaseModule } from './sample-data/sample-data.database.module';
import { TodoDataDatabaseModule } from './todo-data/todo-data.database.module';
import { UserDataDatabaseModule } from './user-data/user-data.database.module';

@Module({
  imports: [
    DatabaseModule,
    SampleDatabaseModule,
    TodoDataDatabaseModule,
    UserDataDatabaseModule,
  ],
  exports: [
    SampleDatabaseModule,
    TodoDataDatabaseModule,
    UserDataDatabaseModule,
  ],
})
export class DataAccessModule {}
