import { Module } from '@nestjs/common';
import { OrderFaqService } from './order-faq.service';
import { OrderFaqResolver } from './order-faq.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderFaq } from './entities/order-faq.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrderFaq])],
  providers: [OrderFaqResolver, OrderFaqService],
})
export class OrderFaqModule {}
