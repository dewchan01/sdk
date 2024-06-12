import { Injectable } from '@nestjs/common';
import { UserDataDatabaseService } from '../data-access/user-data/user-data.database.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '../data-access/user-data/user-data.entity';

@Injectable()
export class UserService {
  constructor(private readonly userRepo: UserDataDatabaseService) {}

  public async create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.username = createUserDto.username;
    user.password = createUserDto.password;
    return await this.userRepo.save(user);
  }

  public async findOne(username: string): Promise<User> {
    return await this.userRepo.findOne({ where: { username } });
  }
}
