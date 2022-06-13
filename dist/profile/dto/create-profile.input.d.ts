import { UserLanguage } from '../entities/profile.entity';
export declare class CreateProfileInput {
    firstName: string;
    lastName: string;
    activeOrders: string;
    completedOrder: number;
    canceledOrder: number;
    specialization: string;
    description: string;
    descriptionMarkDown: string;
    fileId: string;
    achievement: string;
    rank: string;
    language: UserLanguage;
    onlineStatus: boolean;
    createdAt: string;
    userId: string;
}
