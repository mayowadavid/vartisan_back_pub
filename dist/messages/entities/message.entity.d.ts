import { Chat } from 'src/chats/entities/chat.entity';
import { File } from 'src/files/entities/file.entity';
import { Order } from 'src/order/entities/order.entity';
export declare class Message {
    id: string;
    date: string;
    time: string;
    description: string;
    userId: string;
    fileId: string;
    orderId: string;
    chatId: string;
    user: string;
    file: File[];
    chat: Chat;
    order: Order;
}
