import { EarningStatus } from '../entities/earning.entity';
export declare class CreateEarningInput {
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
