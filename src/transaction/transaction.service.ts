import { Injectable } from '@nestjs/common';
import { CreateTransactionInput } from './dto/create-transaction.input';
import { UpdateTransactionInput } from './dto/update-transaction.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from './entities/transaction.entity';
import { Earning } from 'src/earnings/entities/earning.entity';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(Transaction)
    private transactionRepository: Repository<Transaction>,
    @InjectRepository(Earning)
    private earningRepository: Repository<Earning>,
  ) {}

  create(createTransactionInput: CreateTransactionInput) {
    const transaction = this.transactionRepository.create(
      createTransactionInput,
    );
    if (transaction.transactionType == 'payment') {
      this.earningRepository.findOne();
    }
    return this.transactionRepository.save(transaction);
  }

  findAll(): Promise<Transaction[]> {
    return this.transactionRepository.find();
  }

  findOne(id: string): Promise<Transaction> {
    return this.transactionRepository.findOne(id);
  }

  async update(
    user,
    id: string,
    updateTransactionInput: UpdateTransactionInput,
  ) {
    const wallet = await this.transactionRepository.findOne({
      where: {
        user,
      },
    });
    const clean = (obj) => {
      for (const prop in obj) {
        if (obj[prop] === null || obj[prop] === undefined) {
          delete obj[prop];
        }
      }
      return obj;
    };
    const value = clean(updateTransactionInput);
    const result = { ...wallet, ...value };
    return this.transactionRepository.save(result);
  }

  async remove(id: string) {
    const deleteTransaction = await this.transactionRepository.findOne(id);
    await this.transactionRepository.remove(deleteTransaction);
    return deleteTransaction;
  }
}
