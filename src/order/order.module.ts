import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderResolver } from './order.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { NotificationsService } from 'src/notifications/notifications.service';
import { Notification } from 'src/notifications/entities/notification.entity';
import { PusherService } from 'src/pusher/pusher.service';

@Module({
  imports: [TypeOrmModule.forFeature([Order, Notification])],
  providers: [OrderResolver, OrderService, NotificationsService, PusherService],
})
export class OrderModule {}
