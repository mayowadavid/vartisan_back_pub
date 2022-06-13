import { CreateTransactionInput } from './create-transaction.input';
import { TransactionStatus, TransactionType } from '../entities/transaction.entity';
declare const UpdateTransactionInput_base: import("@nestjs/common").Type<Partial<CreateTransactionInput>>;
export declare class UpdateTransactionInput extends UpdateTransactionInput_base {
    id: string;
    date: string;
    description: string;
    commission: string;
    transactionType: TransactionType;
    transactionSenderId: string;
    transactionReceiverId: string;
    earningId: string;
    status: TransactionStatus;
}
export {};
