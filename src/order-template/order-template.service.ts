import { Injectable } from '@nestjs/common';
import { CreateOrderTemplateInput } from './dto/create-order-template.input';
import { UpdateOrderTemplateInput } from './dto/update-order-template.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderTemplate } from './entities/order-template.entity';

@Injectable()
export class OrderTemplateService {
  constructor(
    @InjectRepository(OrderTemplate)
    private orderTemplateRepository: Repository<OrderTemplate>,
  ) {}

  create(
    createOrderTemplateInput: CreateOrderTemplateInput,
  ): Promise<OrderTemplate> {
    const orderTemplate = this.orderTemplateRepository.create(
      createOrderTemplateInput,
    );
    return this.orderTemplateRepository.save(orderTemplate);
  }

  findAll(): Promise<OrderTemplate[]> {
    return this.orderTemplateRepository.find({
      relations: ['order'],
    });
  }

  findOne(id: string): Promise<OrderTemplate> {
    return this.orderTemplateRepository.findOne(id, {
      relations: ['order'],
    });
  }

  update(
    id: string,
    updateOrderTemplateInput: UpdateOrderTemplateInput,
  ): Promise<OrderTemplate> {
    const OrderTemplate: OrderTemplate = this.orderTemplateRepository.create(
      updateOrderTemplateInput,
    );
    OrderTemplate.id = id;
    return this.orderTemplateRepository.save(OrderTemplate);
  }

  async remove(id: string): Promise<OrderTemplate> {
    const deleteOrderTemplate = await this.orderTemplateRepository.findOne(id, {
      relations: ['order'],
    });
    await this.orderTemplateRepository.remove(deleteOrderTemplate);
    return deleteOrderTemplate;
  }
}
