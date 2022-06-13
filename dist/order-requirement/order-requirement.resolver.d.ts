import { OrderRequirementService } from './order-requirement.service';
import { OrderRequirement } from './entities/order-requirement.entity';
import { CreateOrderRequirementInput } from './dto/create-order-requirement.input';
import { UpdateOrderRequirementInput } from './dto/update-order-requirement.input';
export declare class OrderRequirementResolver {
    private readonly orderRequirementService;
    constructor(orderRequirementService: OrderRequirementService);
    createOrderRequirement(createOrderRequirementInput: CreateOrderRequirementInput): Promise<OrderRequirement>;
    findAll(): Promise<OrderRequirement[]>;
    findOne(id: string): Promise<OrderRequirement>;
    updateOrderRequirement(updateOrderRequirementInput: UpdateOrderRequirementInput): Promise<OrderRequirement>;
    removeOrderRequirement(id: string): Promise<OrderRequirement>;
}
