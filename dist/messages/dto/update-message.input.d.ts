import { CreateMessageInput } from './create-message.input';
declare const UpdateMessageInput_base: import("@nestjs/common").Type<Partial<CreateMessageInput>>;
export declare class UpdateMessageInput extends UpdateMessageInput_base {
    id: string;
    date: string;
    time: string;
    description: string;
    userId: string;
    fileId: string;
    orderId: string;
    chatId: string;
}
export {};
