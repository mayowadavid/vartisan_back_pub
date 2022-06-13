import { OrderService } from './order.service';
import { Order } from './entities/order.entity';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
export declare class OrderResolver {
    private readonly orderService;
    constructor(orderService: OrderService);
    createOrder(user: any, createOrderInput: CreateOrderInput): Promise<Order>;
    findAll(): Promise<Order[]>;
    findOne(id: string): Promise<Order>;
    findClientOrder(user: any): Promise<Order[]>;
    findSellerOrder(user: any): Promise<Order[]>;
    updateOrder(user: any, updateOrderInput: UpdateOrderInput): Promise<Order>;
    removeOrder(id: string): Promise<Order>;
}
