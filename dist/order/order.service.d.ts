import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';
import { NotificationsService } from 'src/notifications/notifications.service';
export declare class OrderService {
    private orderRepository;
    private notificationService;
    constructor(orderRepository: Repository<Order>, notificationService: NotificationsService);
    create(user: any, createOrderInput: CreateOrderInput): Promise<Order>;
    findAll(): Promise<Order[]>;
    findOne(id: string): Promise<Order>;
    findClientOrder(user: any): Promise<Order[]>;
    findSellerOrder(user: any): Promise<Order[]>;
    update(user: any, id: string, updateOrderInput: UpdateOrderInput): Promise<Order>;
    remove(id: string): Promise<Order>;
}
