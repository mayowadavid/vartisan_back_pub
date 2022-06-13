/// <reference types="multer" />
import { OrderRequirementService } from './order-requirement.service';
export declare class OrderRequirementController {
    private readonly orderRequirementService;
    constructor(orderRequirementService: OrderRequirementService);
    addImage(request: any, response: any, files: Express.Multer.File): Promise<any[]>;
}
