import { Injectable } from '@nestjs/common';
import { TodoDataDatabaseService } from '../data-access/todo-data/todo-data.database.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { QueryTodoDto } from './dto/query-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
  constructor(private todoRepo: TodoDataDatabaseService) {}

  public async create(createTodoDto: CreateTodoDto) {
    return this.todoRepo.save(createTodoDto);
  }

  public async update(updateTodoDto: UpdateTodoDto, id: number) {
    return this.todoRepo.updateOne(id, updateTodoDto);
  }

  public async findAll() {
    return this.todoRepo.find({});
  }

  public async find(query: QueryTodoDto) {
    return this.todoRepo.find(query);
  }

  public async remove(id: number): Promise<void> {
    return this.todoRepo.remove(id);
  }

  public async findById(id: number) {
    return this.todoRepo.findById(id);
  }
}
