import { CreateChatInput } from './dto/create-chat.input';
import { UpdateChatInput } from './dto/update-chat.input';
import { Chat } from './entities/chat.entity';
import { Repository } from 'typeorm';
export declare class ChatsService {
    private chatRepository;
    constructor(chatRepository: Repository<Chat>);
    create(user: any, createChatInput: CreateChatInput): Promise<Chat>;
    findAll(): Promise<Chat[]>;
    findOne(id: string): Promise<Chat>;
    findChatByUser(user: any): Promise<Chat[]>;
    findChatByExistence(user: any, createChatInput: CreateChatInput): Promise<Chat>;
    update(user: any, id: string, updateChatInput: UpdateChatInput): Promise<Chat>;
    remove(id: string): Promise<Chat>;
}
