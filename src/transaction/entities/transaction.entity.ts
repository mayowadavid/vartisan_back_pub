import { ObjectType, Field } from '@nestjs/graphql';
import { Earning } from 'src/earnings/entities/earning.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

export enum TransactionStatus {
  APPROVED = 'approved',
  REJECTED = 'rejected',
  PENDING = 'pending',
}

export enum TransactionType {
  WITHDRAWAL = 'withdrawal',
  PAYMENT = 'payment',
}

@ObjectType()
@Entity()
export class Transaction {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field({ description: 'date', nullable: true })
  @Column({ nullable: true })
  date: string;

  @Field({ description: 'description', nullable: true })
  @Column({ nullable: true })
  description: string;

  @Field({ description: 'commission rate', nullable: true })
  @Column({ nullable: true })
  commission: string;

  @Field({ description: 'transaction type', nullable: true })
  @Column({
    nullable: true,
    type: 'enum',
    enum: TransactionType,
    default: 'payment',
  })
  transactionType: TransactionType;

  @Field({ description: 'transactionSenderId', nullable: true })
  @Column({ nullable: true })
  transactionSenderId: string;

  @Field({ description: 'transactionReceiverId', nullable: true })
  @Column({ nullable: true })
  transactionReceiverId: string;

  @Field({ description: 'earningId', nullable: true })
  @Column({ nullable: true })
  earningId: string;

  @Field({ description: 'transaction status', nullable: true })
  @Column({
    nullable: true,
    type: 'enum',
    enum: TransactionStatus,
    default: 'pending',
  })
  status: TransactionStatus;

  @ManyToOne(() => Earning, (earning) => earning.transaction)
  @Field(() => Earning, { description: 'earning transaction' })
  earning: Earning;

  @ManyToOne(() => User, (user) => user.transactionSender)
  @Field(() => User, { description: 'transactionSender' })
  transactionSender: User;

  @ManyToOne(() => User, (user) => user.transactionReceiver)
  @Field(() => User, { description: 'transactionReceiver' })
  transactionReceiver: User;
}
