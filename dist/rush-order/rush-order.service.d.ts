import { Repository } from 'typeorm';
import { RushOrder } from './entities/rush-order.entity';
import { CreateRushOrderInput } from './dto/create-rush-order.input';
import { UpdateRushOrderInput } from './dto/update-rush-order.input';
export declare class RushOrderService {
    private rushOrderRepository;
    constructor(rushOrderRepository: Repository<RushOrder>);
    create(createRushOrderInput: CreateRushOrderInput): Promise<RushOrder>;
    findAll(): Promise<RushOrder[]>;
    findOne(id: string): Promise<RushOrder>;
    update(id: string, updateRushOrderInput: UpdateRushOrderInput): Promise<RushOrder>;
    remove(id: string): Promise<RushOrder>;
}
