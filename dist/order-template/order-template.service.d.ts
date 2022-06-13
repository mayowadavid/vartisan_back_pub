import { CreateOrderTemplateInput } from './dto/create-order-template.input';
import { UpdateOrderTemplateInput } from './dto/update-order-template.input';
import { Repository } from 'typeorm';
import { OrderTemplate } from './entities/order-template.entity';
export declare class OrderTemplateService {
    private orderTemplateRepository;
    constructor(orderTemplateRepository: Repository<OrderTemplate>);
    create(createOrderTemplateInput: CreateOrderTemplateInput): Promise<OrderTemplate>;
    findAll(): Promise<OrderTemplate[]>;
    findOne(id: string): Promise<OrderTemplate>;
    update(id: string, updateOrderTemplateInput: UpdateOrderTemplateInput): Promise<OrderTemplate>;
    remove(id: string): Promise<OrderTemplate>;
}
