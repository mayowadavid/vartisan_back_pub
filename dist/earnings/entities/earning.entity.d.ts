import { User } from 'src/users/entities/user.entity';
import { Gig } from 'src/gig/entities/gig.entity';
import { Transaction } from 'src/transaction/entities/transaction.entity';
export declare enum EarningStatus {
    APPROVED = "approved",
    REJECTED = "rejected",
    PENDING = "pending"
}
export declare class Earning {
    id: string;
    withdrawn: string;
    status: EarningStatus;
    overtimeWithdrawn: string;
    date: string;
    pendingAmount: string;
    balance: string;
    overtimeEarnings: string;
    userId: string;
    gigId: string;
    transaction: Transaction[];
    gig: Gig[];
    user: User;
}
