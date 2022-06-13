import { InputType, Field } from '@nestjs/graphql';
import {
  TransactionStatus,
  TransactionType,
} from '../entities/transaction.entity';

@InputType()
export class CreateTransactionInput {
  @Field({ description: 'date', nullable: true })
  date: string;

  @Field({ description: 'description', nullable: true })
  description: string;

  @Field({ description: 'commission rate', nullable: true })
  commission: string;

  @Field({ description: 'transaction type', nullable: true })
  transactionType: TransactionType;

  @Field({ description: 'transactionSenderId', nullable: true })
  transactionSenderId: string;

  @Field({ description: 'transactionReceiverId', nullable: true })
  transactionReceiverId: string;

  @Field({ description: 'earningId', nullable: true })
  earningId: string;

  @Field({ description: 'transaction status', nullable: true })
  status: TransactionStatus;
}
