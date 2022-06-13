import { EarningsService } from './earnings.service';
import { Earning } from './entities/earning.entity';
import { CreateEarningInput } from './dto/create-earning.input';
export declare class EarningsResolver {
    private readonly earningsService;
    constructor(earningsService: EarningsService);
    createEarning(createEarningInput: CreateEarningInput): Promise<Earning>;
    findAll(): Promise<Earning[]>;
    findOne(id: string): Promise<Earning>;
    removeEarning(id: string): Promise<Earning>;
}
