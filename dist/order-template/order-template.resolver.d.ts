import { OrderTemplateService } from './order-template.service';
import { OrderTemplate } from './entities/order-template.entity';
import { CreateOrderTemplateInput } from './dto/create-order-template.input';
import { UpdateOrderTemplateInput } from './dto/update-order-template.input';
export declare class OrderTemplateResolver {
    private readonly orderTemplateService;
    constructor(orderTemplateService: OrderTemplateService);
    createOrderTemplate(createOrderTemplateInput: CreateOrderTemplateInput): Promise<OrderTemplate>;
    findAll(): Promise<OrderTemplate[]>;
    findOne(id: string): Promise<OrderTemplate>;
    updateOrderTemplate(updateOrderTemplateInput: UpdateOrderTemplateInput): Promise<OrderTemplate>;
    removeOrderTemplate(id: string): Promise<OrderTemplate>;
}
