/* eslint-disable semi */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
// eslint-disable-next-line import/prefer-default-export
export class User {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    fullname: string;

  @Column()
    email: string;

  @Column()
    phoneNumber: number;

  @Column()
    password: string;

  @Column()
    verifiedAt: string;

  @CreateDateColumn()
    createdDate: Date;

  @UpdateDateColumn()
    updatedDate: Date;
}
