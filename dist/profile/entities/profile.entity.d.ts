import { File } from 'src/files/entities/file.entity';
import { User } from 'src/users/entities/user.entity';
export declare enum UserRole {
    ADMIN = "admin",
    VARTISAN = "vartisan",
    CLIENT = "client"
}
export declare enum UserLanguage {
    ENGLISH = "english",
    FRENCH = "french",
    SPANISH = "spanish"
}
export declare class Profile {
    id: string;
    firstName: string;
    lastName: string;
    activeOrders: string;
    completedOrder: number;
    canceledOrder: number;
    specialization: string;
    description: string;
    descriptionMarkDown: string;
    file: File;
    fileId: string;
    achievement: string;
    rank: string;
    role: UserRole;
    language: UserLanguage;
    onlineStatus: boolean;
    reference: string;
    createdAt: string;
    user: User;
    userId: string;
    createdDate: Date;
    updatedDate: Date;
}
