import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../database/base-entity';

@Entity()
export class Todo extends BaseEntity {
  @Column()
  public name!: string;

  @Column({ default: false })
  public completed?: boolean;
}
