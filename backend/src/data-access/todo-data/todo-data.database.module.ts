import { Module } from '@nestjs/common';
import { TodoDataDatabaseService } from './todo-data.database.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './todo-data.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  providers: [TodoDataDatabaseService],
  exports: [TodoDataDatabaseService],
})
export class TodoDataDatabaseModule {}
