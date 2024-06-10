import { Module } from '@nestjs/common';
import { UserDataDatabaseService } from './user-data.database.service';
import { User } from './user-data.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserDataDatabaseService],
  exports: [UserDataDatabaseService],
})
export class UserDataDatabaseModule {}
