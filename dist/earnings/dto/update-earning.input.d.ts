import { CreateEarningInput } from './create-earning.input';
import { EarningStatus } from '../entities/earning.entity';
declare const UpdateEarningInput_base: import("@nestjs/common").Type<Partial<CreateEarningInput>>;
export declare class UpdateEarningInput extends UpdateEarningInput_base {
    id: string;
    withdrawn: string;
    status: EarningStatus;
    overtimeWithdrawn: string;
    date: string;
    pendingAmount: string;
    gigId: string;
    balance: string;
    overtimeEarnings: string;
    userId: string;
}
export {};
