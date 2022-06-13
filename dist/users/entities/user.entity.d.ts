import { Chat } from 'src/chats/entities/chat.entity';
import { Favorite } from 'src/favorites/entities/favorite.entity';
import { Gig } from 'src/gig/entities/gig.entity';
import { Order } from 'src/order/entities/order.entity';
import { Profile } from 'src/profile/entities/profile.entity';
import { Comment } from 'src/comments/entities/comment.entity';
import { Notification } from 'src/notifications/entities/notification.entity';
import { Message } from '../../messages/entities/message.entity';
import { Reference } from 'src/reference/entities/reference.entity';
import { Blog } from 'src/blog/entities/blog.entity';
import { Earning } from 'src/earnings/entities/earning.entity';
import { Transaction } from 'src/transaction/entities/transaction.entity';
export declare enum UserStatus {
    BANNED = "banned",
    APPROVED = "approved",
    REJECTED = "rejected",
    PENDING = "pending"
}
export declare class User {
    id: string;
    userName: string;
    email: string;
    password: string;
    profileId: string;
    orderId: string;
    chatId: string;
    gigId: string;
    earningId: string;
    refreshToken: string;
    refreshTokenExp: string;
    createdAt: string;
    status: UserStatus;
    transactionSender: Transaction[];
    transactionReceiver: Transaction[];
    comment: Comment[];
    blog: Blog[];
    reference: Reference[];
    notification: Notification[];
    receiver: Chat[];
    sender: Chat[];
    client: Order[];
    seller: Order[];
    earning: Earning;
    profile: Profile;
    message: Message[];
    favorite: Favorite[];
    gig: Gig[];
}
