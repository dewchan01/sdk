import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, SelectQueryBuilder } from 'typeorm';
import { SampleData } from './sample-data.entity';

@Injectable()
export class SampleDataDatabaseService {
  constructor(
    @InjectRepository(SampleData)
    private readonly SampleDataRepo: Repository<SampleData>,
  ) {}

  public async upsertSampleData(sampleData: SampleData): Promise<SampleData> {
    const existingEntity = await this.SampleDataRepo.findOne({
      where: { column1: sampleData.column1 },
      withDeleted: true,
    });
    if (existingEntity) {
      await this.SampleDataRepo.restore({ id: existingEntity.id });
      const updatedResult = await this.SampleDataRepo.findOne({
        where: { column1: sampleData.column1 },
      });
      if (updatedResult) {
        return updatedResult;
      }
    } else {
      return this.SampleDataRepo.save(sampleData);
    }
    return existingEntity;
  }

  public async getColumn1(column1: string): Promise<SampleData | null> {
    try {
      return this.getQuery()
        .andWhere('SampleData.column1 = :column1', { column1 })
        .getOne();
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  public async deleteColumn1(column1: string): Promise<void> {
    await this.SampleDataRepo.createQueryBuilder()
      .softDelete()
      .where('column1 = :column1', { column1 })
      .execute();
  }

  private getQuery(): SelectQueryBuilder<SampleData> {
    return this.SampleDataRepo.createQueryBuilder().select();
  }
}
