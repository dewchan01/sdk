import { Module } from '@nestjs/common';
import { SampleDataDatabaseService } from './sample-data.database.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SampleData } from './sample-data.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SampleData])],
  providers: [SampleDataDatabaseService],
  exports: [SampleDataDatabaseService],
})
export class SampleDatabaseModule {}
