import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../../user/dto/create-user.dto';
import { FindManyOptions, Repository } from 'typeorm';
import { User } from './user-data.entity';

@Injectable()
export class UserDataDatabaseService {
  constructor(
    @InjectRepository(User) private readonly userDataRepo: Repository<User>,
  ) {}

  public async save(newData: CreateUserDto) {
    return this.userDataRepo.save(newData);
  }

  public async findOne(options: FindManyOptions<User>) {
    return this.userDataRepo.findOne(options);
  }
}
