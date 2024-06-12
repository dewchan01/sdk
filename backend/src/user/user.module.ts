import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DataAccessModule } from '../data-access/data-access.module';

@Module({
  providers: [UserService],
  controllers: [UserController],
  imports: [DataAccessModule],
  exports: [UserService],
})
export class UserModule {}
