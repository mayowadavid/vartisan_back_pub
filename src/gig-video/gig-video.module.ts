import { Module } from '@nestjs/common';
import { GigVideoService } from './gig-video.service';
import { GigVideoResolver } from './gig-video.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GigVideo } from './entities/gig-video.entity';
import { File } from 'src/files/entities/file.entity';
import { GigVideoController } from './gig-video.controller';
import { FilesService } from 'src/files/files.service';

@Module({
  imports: [TypeOrmModule.forFeature([GigVideo, File])],
  providers: [GigVideoResolver, GigVideoService, FilesService],
  controllers: [GigVideoController],
})
export class GigVideoModule {}
