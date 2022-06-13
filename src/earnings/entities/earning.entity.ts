import { ObjectType, Field } from '@nestjs/graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
} from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Gig } from 'src/gig/entities/gig.entity';
import { Transaction } from 'src/transaction/entities/transaction.entity';

export enum EarningStatus {
  APPROVED = 'approved',
  REJECTED = 'rejected',
  PENDING = 'pending',
}
@ObjectType()
@Entity()
export class Earning {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field({ description: 'withdrawn', nullable: true })
  @Column({ nullable: true })
  withdrawn: string;

  @Field({ description: 'earning status', nullable: true })
  @Column({
    nullable: true,
    type: 'enum',
    enum: EarningStatus,
    default: 'pending',
  })
  status: EarningStatus;

  @Field({ description: 'overtime withdrawal', nullable: true })
  @Column({ nullable: true })
  overtimeWithdrawn: string;

  @Field({ description: 'date', nullable: true })
  @Column({ nullable: true })
  date: string;

  @Field({ description: 'pending Amount', nullable: true })
  @Column({ nullable: true })
  pendingAmount: string;

  @Field({ description: 'monthly balance', nullable: true })
  @Column({ nullable: true })
  balance: string;

  @Field({ description: 'overtime balance', nullable: true })
  @Column({ nullable: true })
  overtimeEarnings: string;

  @Field({ description: 'user Id', nullable: true })
  @Column({ nullable: true })
  userId: string;

  @Field({ description: 'gig Id', nullable: true })
  @Column({ nullable: true })
  gigId: string;

  @OneToMany(() => Transaction, (transaction) => transaction.earning)
  @Field(() => [Transaction], {
    description: 'gig transaction',
    nullable: true,
  })
  transaction: Transaction[];

  @OneToMany(() => Gig, (gig) => gig.earning)
  @Field(() => [Gig], { description: 'gig purchased', nullable: true })
  gig: Gig[];

  @OneToOne(() => User, (user) => user.earning)
  @Field(() => User, { description: 'user earning' })
  user: User;
}
