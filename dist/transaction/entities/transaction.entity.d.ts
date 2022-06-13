import { Earning } from 'src/earnings/entities/earning.entity';
import { User } from 'src/users/entities/user.entity';
export declare enum TransactionStatus {
    APPROVED = "approved",
    REJECTED = "rejected",
    PENDING = "pending"
}
export declare enum TransactionType {
    WITHDRAWAL = "withdrawal",
    PAYMENT = "payment"
}
export declare class Transaction {
    id: string;
    date: string;
    description: string;
    commission: string;
    transactionType: TransactionType;
    transactionSenderId: string;
    transactionReceiverId: string;
    earningId: string;
    status: TransactionStatus;
    earning: Earning;
    transactionSender: User;
    transactionReceiver: User;
}
