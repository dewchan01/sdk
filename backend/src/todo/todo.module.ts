import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { DataAccessModule } from '../data-access/data-access.module';

@Module({
  controllers: [TodoController],
  providers: [TodoService],
  imports: [DataAccessModule],
})
export class TodoModule {}
