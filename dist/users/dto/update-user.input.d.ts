import { CreateUserInput } from './create-user.input';
import { UserStatus } from '../entities/user.entity';
declare const UpdateUserInput_base: import("@nestjs/common").Type<Partial<CreateUserInput>>;
export declare class UpdateUserInput extends UpdateUserInput_base {
    id: string;
    userName: string;
    email: string;
    password: string;
    profileId: string;
    orderId: string;
    chatId: string;
    gigId: string;
    earningId: string;
    refreshToken: string;
    refreshTokenExp: string;
    createdAt: string;
    status: UserStatus;
}
export {};
