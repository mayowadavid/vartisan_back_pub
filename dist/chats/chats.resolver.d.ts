import { ChatsService } from './chats.service';
import { Chat } from './entities/chat.entity';
import { CreateChatInput } from './dto/create-chat.input';
import { UpdateChatInput } from './dto/update-chat.input';
export declare class ChatsResolver {
    private readonly chatsService;
    constructor(chatsService: ChatsService);
    createChat(user: any, createChatInput: CreateChatInput): Promise<Chat>;
    findAll(): Promise<Chat[]>;
    findChatByUser(user: any): Promise<Chat[]>;
    findOne(id: string): Promise<Chat>;
    findChatByExisyence(user: any, createChatInput: CreateChatInput): Promise<Chat>;
    updateChat(user: any, updateChatInput: UpdateChatInput): Promise<Chat>;
    removeChat(id: string): Promise<Chat>;
}
