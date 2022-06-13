import { OrderFaqService } from './order-faq.service';
import { OrderFaq } from './entities/order-faq.entity';
import { CreateOrderFaqInput } from './dto/create-order-faq.input';
import { UpdateOrderFaqInput } from './dto/update-order-faq.input';
export declare class OrderFaqResolver {
    private readonly orderFaqService;
    constructor(orderFaqService: OrderFaqService);
    createOrderFaq(createOrderFaqInput: CreateOrderFaqInput): Promise<OrderFaq>;
    findAll(): Promise<OrderFaq[]>;
    findOne(id: string): Promise<OrderFaq>;
    updateOrderFaq(updateOrderFaqInput: UpdateOrderFaqInput): Promise<OrderFaq>;
    removeOrderFaq(id: string): Promise<OrderFaq>;
}
