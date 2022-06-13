import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesResolver } from './messages.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from 'src/messages/entities/message.entity';
import { MessagesController } from './messages.controller';
import { FilesService } from 'src/files/files.service';
import { File } from 'src/files/entities/file.entity';
import { PusherService } from 'src/pusher/pusher.service';

@Module({
  imports: [TypeOrmModule.forFeature([Message, File])],
  providers: [MessagesResolver, MessagesService, FilesService, PusherService],
  controllers: [MessagesController],
})
export class MessagesModule {}
