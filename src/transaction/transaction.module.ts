import { Module } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionResolver } from './transaction.resolver';
import { EarningsService } from 'src/earnings/earnings.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Earning } from 'src/earnings/entities/earning.entity';
import { EarningsModule } from 'src/earnings/earnings.module';
import { Transaction } from './entities/transaction.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Transaction, Earning]), EarningsModule],
  providers: [TransactionResolver, TransactionService, EarningsService],
})
export class TransactionModule {}
