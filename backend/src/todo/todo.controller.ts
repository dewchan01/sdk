import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  Query,
  UsePipes,
  UseGuards,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { QueryTodoDto } from './dto/query-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';
import { Todo } from '../data-access/todo-data/todo-data.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('todos')
@ApiTags('Todos')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class TodoController {
  constructor(private readonly todosService: TodoService) {}

  @Post()
  public create(@Body() createTodoDto: CreateTodoDto) {
    return this.todosService.create(createTodoDto);
  }

  @Get()
  @UsePipes(new ValidationPipe({ transform: true }))
  public async find(@Query() queryTodoDto: QueryTodoDto) {
    return this.todosService.find(queryTodoDto);
  }

  @Get(':id')
  @ApiResponse({
    type: Todo,
  })
  public async findById(@Param('id') id: number) {
    return this.todosService.findById(id);
  }

  @Patch(':id')
  public async update(
    @Param('id') id: number,
    @Body() updateTodoDto: UpdateTodoDto,
  ) {
    return this.todosService.update(updateTodoDto, id);
  }

  @Delete(':id')
  public remove(@Param('id') id: number) {
    return this.todosService.remove(id);
  }
}
