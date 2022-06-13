import { CreateOrderRequirementInput } from './dto/create-order-requirement.input';
import { UpdateOrderRequirementInput } from './dto/update-order-requirement.input';
import { OrderRequirement } from './entities/order-requirement.entity';
import { Repository } from 'typeorm';
import { FilesService } from 'src/files/files.service';
export declare class OrderRequirementService {
    private orderRequirement;
    private fileService;
    constructor(orderRequirement: Repository<OrderRequirement>, fileService: FilesService);
    create(createOrderRequirementInput: CreateOrderRequirementInput): Promise<OrderRequirement>;
    findAll(): Promise<OrderRequirement[]>;
    findOne(id: string): Promise<OrderRequirement>;
    upload(files: any, request: any, response: any): Promise<any[]>;
    update(id: string, updateOrderRequirementInput: UpdateOrderRequirementInput): Promise<OrderRequirement>;
    remove(id: string): Promise<OrderRequirement>;
}
