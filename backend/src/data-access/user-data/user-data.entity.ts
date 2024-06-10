import { BeforeInsert, Column, Entity } from 'typeorm';
import { BaseEntity } from '../database/base-entity';
import * as bcrypt from 'bcrypt';

@Entity()
export class User extends BaseEntity {
  @Column()
  public username!: string;

  @Column()
  public password!: string;

  @Column({ default: 'user' })
  public role!: string;

  @BeforeInsert()
  public async hashPassword(password: string) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(password || this.password, salt);
  }
}
