import { NotificationsService } from './notifications.service';
import { Notification } from './entities/notification.entity';
import { CreateNotificationInput } from './dto/create-notification.input';
import { UpdateNotificationInput } from './dto/update-notification.input';
export declare class NotificationsResolver {
    private readonly notificationsService;
    constructor(notificationsService: NotificationsService);
    createNotification(createNotificationInput: CreateNotificationInput): Promise<Notification>;
    findAll(): Promise<Notification[]>;
    findUserNotification(user: any): Promise<Notification[]>;
    findOne(id: string): Promise<Notification>;
    updateNotification(updateNotificationInput: UpdateNotificationInput): Promise<Notification>;
    removeNotification(id: string): Promise<Notification>;
}
