import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export class BaseEntity {
  @PrimaryGeneratedColumn()
  public id?: number;

  @CreateDateColumn({ nullable: false })
  public createdAt?: Date;

  @UpdateDateColumn({ nullable: false })
  public updatedAt?: Date;
}
