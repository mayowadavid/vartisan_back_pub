import { Module } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { NotificationsResolver } from './notifications.resolver';
import { Notification } from './entities/notification.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PusherService } from 'src/pusher/pusher.service';
@Module({
  imports: [TypeOrmModule.forFeature([Notification])],
  providers: [NotificationsResolver, NotificationsService, PusherService],
  exports: [NotificationsService],
})
export class NotificationsModule {}
