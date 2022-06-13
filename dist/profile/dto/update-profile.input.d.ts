import { CreateProfileInput } from './create-profile.input';
import { UserLanguage, UserRole } from '../entities/profile.entity';
declare const UpdateProfileInput_base: import("@nestjs/common").Type<Partial<CreateProfileInput>>;
export declare class UpdateProfileInput extends UpdateProfileInput_base {
    id: string;
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
    role: UserRole;
}
export {};
