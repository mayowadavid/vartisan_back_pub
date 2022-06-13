import { CreatePrivateCommissionInput } from './dto/create-private-commission.input';
import { UpdatePrivateCommissionInput } from './dto/update-private-commission.input';
import { Repository } from 'typeorm';
import { PrivateCommission } from './entities/private-commission.entity';
export declare class PrivateCommissionService {
    private privateCommissionRepository;
    constructor(privateCommissionRepository: Repository<PrivateCommission>);
    create(createPrivateCommissionInput: CreatePrivateCommissionInput): Promise<PrivateCommission>;
    findAll(): Promise<PrivateCommission[]>;
    findOne(id: string): Promise<PrivateCommission>;
    update(id: string, updatePrivateCommissionInput: UpdatePrivateCommissionInput): Promise<PrivateCommission>;
    remove(id: string): Promise<PrivateCommission>;
}
