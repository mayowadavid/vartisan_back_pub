import { PrivateCommissionService } from './private-commission.service';
import { PrivateCommission } from './entities/private-commission.entity';
import { CreatePrivateCommissionInput } from './dto/create-private-commission.input';
import { UpdatePrivateCommissionInput } from './dto/update-private-commission.input';
export declare class PrivateCommissionResolver {
    private readonly privateCommissionService;
    constructor(privateCommissionService: PrivateCommissionService);
    createPrivateCommission(createPrivateCommissionInput: CreatePrivateCommissionInput): Promise<PrivateCommission>;
    findAll(): Promise<PrivateCommission[]>;
    findOne(id: string): Promise<PrivateCommission>;
    updatePrivateCommission(updatePrivateCommissionInput: UpdatePrivateCommissionInput): Promise<PrivateCommission>;
    removePrivateCommission(id: string): Promise<PrivateCommission>;
}
