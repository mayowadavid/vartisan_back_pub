import { Module } from '@nestjs/common';
import { OrderFeedbackService } from './order-feedback.service';
import { OrderFeedbackResolver } from './order-feedback.resolver';

@Module({
  providers: [OrderFeedbackResolver, OrderFeedbackService],
})
export class OrderFeedbackModule {}
