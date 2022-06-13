import { CreateNotificationInput } from './dto/create-notification.input';
import { UpdateNotificationInput } from './dto/update-notification.input';
import { Notification } from './entities/notification.entity';
import { Repository } from 'typeorm';
import { PusherService } from 'src/pusher/pusher.service';
export declare class NotificationsService {
    private notificationRepository;
    private pusherService;
    constructor(notificationRepository: Repository<Notification>, pusherService: PusherService);
    create(createNotificationInput: CreateNotificationInput): Promise<Notification>;
    findAll(): Promise<Notification[]>;
    findUserNotification(user: any): Promise<Notification[]>;
    findOne(id: string): Promise<Notification>;
    update(id: string, updateNotificationInput: UpdateNotificationInput): Promise<Notification>;
    remove(id: string): Promise<Notification>;
}
