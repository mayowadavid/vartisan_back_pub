import { RushOrderService } from './rush-order.service';
import { RushOrder } from './entities/rush-order.entity';
import { CreateRushOrderInput } from './dto/create-rush-order.input';
import { UpdateRushOrderInput } from './dto/update-rush-order.input';
export declare class RushOrderResolver {
    private readonly rushOrderService;
    constructor(rushOrderService: RushOrderService);
    createRushOrder(createRushOrderInput: CreateRushOrderInput): Promise<RushOrder>;
    findAll(): Promise<RushOrder[]>;
    findOne(id: string): Promise<RushOrder>;
    updateRushOrder(updateRushOrderInput: UpdateRushOrderInput): Promise<RushOrder>;
    removeRushOrder(id: string): Promise<RushOrder>;
}
