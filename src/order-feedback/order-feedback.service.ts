import { Injectable } from '@nestjs/common';
import { CreateOrderFeedbackInput } from './dto/create-order-feedback.input';
import { UpdateOrderFeedbackInput } from './dto/update-order-feedback.input';

@Injectable()
export class OrderFeedbackService {
  create(createOrderFeedbackInput: CreateOrderFeedbackInput) {
    return 'This action adds a new orderFeedback';
  }

  findAll() {
    return `This action returns all orderFeedback`;
  }

  findOne(id: number) {
    return `This action returns a #${id} orderFeedback`;
  }

  update(id: number, updateOrderFeedbackInput: UpdateOrderFeedbackInput) {
    return `This action updates a #${id} orderFeedback`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderFeedback`;
  }
}
