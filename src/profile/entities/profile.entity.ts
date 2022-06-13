import { ObjectType, Field } from '@nestjs/graphql';
import { File } from 'src/files/entities/file.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum UserRole {
  ADMIN = 'admin',
  VARTISAN = 'vartisan',
  CLIENT = 'client',
}

export enum UserLanguage {
  ENGLISH = 'english',
  FRENCH = 'french',
  SPANISH = 'spanish',
}

@ObjectType()
@Entity()
export class Profile {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field({ description: 'first name', nullable: true })
  @Column({ nullable: true })
  firstName: string;

  @Field({ description: 'last name', nullable: true })
  @Column({ nullable: true })
  lastName: string;

  @Field({ description: 'All active orders', nullable: true })
  @Column({ nullable: true })
  activeOrders: string;

  @Field({ description: 'All completed orders', nullable: true })
  @Column({ nullable: true })
  completedOrder: number;

  @Field({ description: 'All canceled orders', nullable: true })
  @Column({ nullable: true })
  canceledOrder: number;

  @Field({ description: 'User specialization', nullable: true })
  @Column({ nullable: true })
  specialization: string;

  @Field({ description: 'about User', nullable: true })
  @Column({ nullable: true })
  description: string;

  @Field({ description: 'description mark down', nullable: true })
  @Column({ nullable: true })
  descriptionMarkDown: string;

  @OneToOne(() => File, (file) => file.profileImage)
  @JoinColumn()
  @Field(() => File, { description: 'profile images', nullable: true })
  file: File;

  @Field({ description: 'file id', nullable: true })
  @Column({ nullable: true })
  fileId: string;

  @Field({ description: 'User achievement', nullable: true })
  @Column({ nullable: true })
  achievement: string;

  @Field({ description: 'User rank', nullable: true })
  @Column({ nullable: true })
  rank: string;

  @Field({ description: 'User role', nullable: true })
  @Column({ nullable: true, type: 'enum', enum: UserRole, default: 'client' })
  role: UserRole;

  @Field({ description: 'User language', nullable: true })
  @Column({
    nullable: true,
    type: 'enum',
    enum: UserLanguage,
    default: 'english',
  })
  language: UserLanguage;

  @Field({ description: 'User status', nullable: true })
  @Column({ nullable: true })
  onlineStatus: boolean;

  @Field({ description: 'user reference', nullable: true })
  @Column({ nullable: true })
  reference: string;

  @Field({ description: 'user registration date', nullable: true })
  @Column({ nullable: true })
  createdAt: string;

  @OneToOne(() => User, (user) => user.profile)
  @Field(() => User, { description: 'user profile' })
  user: User;

  @Field({ description: 'user id', nullable: true })
  @Column({ nullable: true })
  userId: string;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;
}
