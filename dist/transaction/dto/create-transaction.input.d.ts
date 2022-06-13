import { TransactionStatus, TransactionType } from '../entities/transaction.entity';
export declare class CreateTransactionInput {
    date: string;
    description: string;
    commission: string;
    transactionType: TransactionType;
    transactionSenderId: string;
    transactionReceiverId: string;
    earningId: string;
    status: TransactionStatus;
}
