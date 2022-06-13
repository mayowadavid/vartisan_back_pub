/// <reference types="multer" />
import { MessagesService } from './messages.service';
import { PusherService } from 'src/pusher/pusher.service';
export declare class MessagesController {
    private readonly messageService;
    private pusherService;
    constructor(messageService: MessagesService, pusherService: PusherService);
    addImage(request: any, response: any, user: any, files: Express.Multer.File): Promise<any[]>;
    messages(username: string, message: string): Promise<any[]>;
}
