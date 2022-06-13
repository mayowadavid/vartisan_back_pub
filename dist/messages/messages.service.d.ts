import { CreateMessageInput } from './dto/create-message.input';
import { UpdateMessageInput } from './dto/update-message.input';
import { Repository } from 'typeorm';
import { Message } from 'src/messages/entities/message.entity';
import { FilesService } from 'src/files/files.service';
import { PusherService } from 'src/pusher/pusher.service';
export declare class MessagesService {
    private messageRepository;
    private fileService;
    private pusherService;
    constructor(messageRepository: Repository<Message>, fileService: FilesService, pusherService: PusherService);
    create(userDetail: any, createMessageInput: CreateMessageInput): Promise<Message>;
    findAll(): Promise<Message[]>;
    upload(files: any, request: any, user: any, response: any): Promise<any[]>;
    findMessageByUser(): Promise<Message[]>;
    findOne(id: string): Promise<Message>;
    update(id: string, updateMessageInput: UpdateMessageInput): Promise<Message>;
    remove(id: string): Promise<Message>;
}
