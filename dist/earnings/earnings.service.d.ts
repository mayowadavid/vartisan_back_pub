import { CreateEarningInput } from './dto/create-earning.input';
import { UpdateEarningInput } from './dto/update-earning.input';
import { Repository } from 'typeorm';
import { Earning } from './entities/earning.entity';
export declare class EarningsService {
    private earningRepository;
    constructor(earningRepository: Repository<Earning>);
    create(createEarningInput: CreateEarningInput): Promise<Earning>;
    findAll(): Promise<Earning[]>;
    findOne(id: string): Promise<Earning>;
    update(user: any, updateEarningInput: UpdateEarningInput): Promise<Earning>;
    remove(id: string): Promise<Earning>;
}
