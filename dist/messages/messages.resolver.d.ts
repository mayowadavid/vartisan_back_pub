import { MessagesService } from './messages.service';
import { Message } from './entities/message.entity';
import { CreateMessageInput } from './dto/create-message.input';
import { UpdateMessageInput } from './dto/update-message.input';
export declare class MessagesResolver {
    private readonly messagesService;
    private pubSub;
    constructor(messagesService: MessagesService);
    createMessage(user: any, createMessageInput: CreateMessageInput): Promise<Message>;
    findAll(): Promise<Message[]>;
    findOne(id: string): Promise<Message>;
    updateMessage(updateMessageInput: UpdateMessageInput): Promise<Message>;
    removeMessage(id: string): Promise<Message>;
}
