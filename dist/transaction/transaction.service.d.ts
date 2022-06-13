import { CreateTransactionInput } from './dto/create-transaction.input';
import { UpdateTransactionInput } from './dto/update-transaction.input';
import { Repository } from 'typeorm';
import { Transaction } from './entities/transaction.entity';
import { Earning } from 'src/earnings/entities/earning.entity';
export declare class TransactionService {
    private transactionRepository;
    private earningRepository;
    constructor(transactionRepository: Repository<Transaction>, earningRepository: Repository<Earning>);
    create(createTransactionInput: CreateTransactionInput): Promise<Transaction>;
    findAll(): Promise<Transaction[]>;
    findOne(id: string): Promise<Transaction>;
    update(user: any, id: string, updateTransactionInput: UpdateTransactionInput): Promise<any>;
    remove(id: string): Promise<Transaction>;
}
