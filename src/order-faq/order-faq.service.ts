import { Injectable } from '@nestjs/common';
import { CreateOrderFaqInput } from './dto/create-order-faq.input';
import { UpdateOrderFaqInput } from './dto/update-order-faq.input';
import { OrderFaq } from './entities/order-faq.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class OrderFaqService {
  constructor(
    @InjectRepository(OrderFaq)
    private orderFaqRepository: Repository<OrderFaq>,
  ) {}

  create(createOrderFaqInput: CreateOrderFaqInput): Promise<OrderFaq> {
    const orderFaq = this.orderFaqRepository.create(createOrderFaqInput);
    return this.orderFaqRepository.save(orderFaq);
  }

  findAll(): Promise<OrderFaq[]> {
    return this.orderFaqRepository.find({
      relations: ['order'],
    });
  }

  findOne(id: string): Promise<OrderFaq> {
    return this.orderFaqRepository.findOne(id, {
      relations: ['order'],
    });
  }

  update(
    id: string,
    updateOrderFaqInput: UpdateOrderFaqInput,
  ): Promise<OrderFaq> {
    const orderFaq: OrderFaq =
      this.orderFaqRepository.create(updateOrderFaqInput);
    orderFaq.id = id;
    return this.orderFaqRepository.save(orderFaq);
  }

  async remove(id: string): Promise<OrderFaq> {
    const deleteOrderFaq = await this.orderFaqRepository.findOne(id, {
      relations: ['order'],
    });
    await this.orderFaqRepository.remove(deleteOrderFaq);
    return deleteOrderFaq;
  }
}
