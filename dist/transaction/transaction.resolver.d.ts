import { TransactionService } from './transaction.service';
import { Transaction } from './entities/transaction.entity';
import { CreateTransactionInput } from './dto/create-transaction.input';
import { UpdateTransactionInput } from './dto/update-transaction.input';
export declare class TransactionResolver {
    private readonly transactionService;
    constructor(transactionService: TransactionService);
    createTransaction(createTransactionInput: CreateTransactionInput): Promise<Transaction>;
    findAll(): Promise<Transaction[]>;
    findOne(id: string): Promise<Transaction>;
    updateTransaction(user: any, updateTransactionInput: UpdateTransactionInput): Promise<any>;
    removeTransaction(id: string): Promise<Transaction>;
}
