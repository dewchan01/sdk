import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTodoDto } from '../../todo/dto/create-todo.dto';
import { QueryTodoDto } from '../../todo/dto/query-todo.dto';
import { UpdateTodoDto } from '../../todo/dto/update-todo.dto';
import { FindManyOptions, Repository } from 'typeorm';
import { Todo } from './todo-data.entity';

@Injectable()
export class TodoDataDatabaseService {
  constructor(
    @InjectRepository(Todo) private readonly TodoDataRepo: Repository<Todo>,
  ) {}

  public async save(newData: CreateTodoDto) {
    return this.TodoDataRepo.save(newData);
  }

  public async find(query: QueryTodoDto): Promise<Todo[]> {
    const option: FindManyOptions<Todo> = { where: query };
    return this.TodoDataRepo.find(option);
  }

  public async remove(id: number): Promise<void> {
    await this.TodoDataRepo.delete(id);
  }

  public update(updateTodoDto: UpdateTodoDto) {
    updateTodoDto.completed = true;
  }

  public async findById(id: number) {
    return this.TodoDataRepo.findOne({ where: { id } });
  }

  public async updateOne(id: number, updateTodoDto: UpdateTodoDto) {
    return this.TodoDataRepo.update(id, updateTodoDto);
  }
}
