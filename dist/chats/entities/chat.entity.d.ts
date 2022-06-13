import { Message } from 'src/messages/entities/message.entity';
import { User } from 'src/users/entities/user.entity';
export declare class Chat {
    id: string;
    senderId: string;
    receiverId: string;
    sender: User;
    receiver: User;
    messageId: string;
    message: Message[];
}
