import { CreateOrderFaqInput } from './dto/create-order-faq.input';
import { UpdateOrderFaqInput } from './dto/update-order-faq.input';
import { OrderFaq } from './entities/order-faq.entity';
import { Repository } from 'typeorm';
export declare class OrderFaqService {
    private orderFaqRepository;
    constructor(orderFaqRepository: Repository<OrderFaq>);
    create(createOrderFaqInput: CreateOrderFaqInput): Promise<OrderFaq>;
    findAll(): Promise<OrderFaq[]>;
    findOne(id: string): Promise<OrderFaq>;
    update(id: string, updateOrderFaqInput: UpdateOrderFaqInput): Promise<OrderFaq>;
    remove(id: string): Promise<OrderFaq>;
}
