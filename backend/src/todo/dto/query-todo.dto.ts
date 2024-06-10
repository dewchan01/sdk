import { PartialType } from '@nestjs/swagger';
import { CreateTodoDto } from './create-todo.dto';

export class QueryTodoDto extends PartialType(CreateTodoDto) {}
