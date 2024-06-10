import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateTodoDto {
  @ApiProperty()
  @IsNotEmpty()
  public name!: string;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  @Transform(({ value }) => {
    return value === 'true';
  })
  public completed?: boolean;
}
