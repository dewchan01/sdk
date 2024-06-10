import { Entity, Column, Unique, DeleteDateColumn } from 'typeorm';
import { BaseEntity } from '../database/base-entity';

@Entity('sample-data')
@Unique(['column1'])
export class SampleData extends BaseEntity {
  @Column()
  public column1!: string;

  @DeleteDateColumn()
  public deletedAt?: Date;
}
