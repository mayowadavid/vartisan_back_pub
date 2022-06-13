import { Injectable } from '@nestjs/common';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
import { Order } from './entities/order.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NotificationsService } from 'src/notifications/notifications.service';
import { CreateNotificationInput } from 'src/notifications/dto/create-notification.input';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
    private notificationService: NotificationsService,
  ) {}
  async create(user, createOrderInput: CreateOrderInput): Promise<Order> {
    const order = this.orderRepository.create(createOrderInput);
    order.client = user;
    order.clientId = user.id;
    const result = await this.orderRepository.save(order);
    const date = new Date();

    const notification = new CreateNotificationInput();
    notification.name = 'order';
    notification.description = 'congratulations your order have been made';
    notification.userId = user.id;
    notification.createdAt = date.toString();
    await this.notificationService.create(notification);

    notification.description = 'congratulations you have a new order';
    notification.createdAt = date.toString();
    notification.userId = createOrderInput.sellerId;
    await this.notificationService.create(notification);
    return result;
  }

  findAll(): Promise<Order[]> {
    return this.orderRepository.find({
      relations: [
        'orderFaq',
        'orderRequirement',
        'message',
        'message.user',
        'message.file',
        'client',
        'seller',
      ],
    });
  }

  findOne(id: string): Promise<Order> {
    return this.orderRepository.findOne(id, {
      relations: [
        'orderFaq',
        'orderRequirement',
        'message',
        'message.user',
        'message.file',
        'client',
        'seller',
      ],
    });
  }

  findClientOrder(user): Promise<Order[]> {
    return this.orderRepository.find({
      relations: [
        'orderFaq',
        'orderRequirement',
        'message',
        'message.user',
        'message.file',
        'client',
        'seller',
      ],
      where: {
        clientId: user.id,
      },
    });
  }

  findSellerOrder(user): Promise<Order[]> {
    return this.orderRepository.find({
      relations: [
        'orderFaq',
        'orderRequirement',
        'message',
        'message.user',
        'message.file',
        'client',
        'seller',
      ],
      where: {
        sellerId: user.id,
      },
    });
  }

  async update(
    user: any,
    id: string,
    updateOrderInput: UpdateOrderInput,
  ): Promise<Order> {
    const order: Order = await this.orderRepository.findOne(id);
    order.client = user;
    const clean = (obj) => {
      for (const prop in obj) {
        if (obj[prop] === null || obj[prop] === undefined) {
          delete obj[prop];
        }
      }
      return obj;
    };
    const value = clean(updateOrderInput);
    const result = { ...order, ...value };
    return this.orderRepository.save(result);
  }

  async remove(id: string): Promise<Order> {
    const deleteOrder = await this.orderRepository.findOne(id, {
      relations: ['orderFaq', 'orderRequirement'],
    });
    await this.orderRepository.remove(deleteOrder);
    return deleteOrder;
  }
}
