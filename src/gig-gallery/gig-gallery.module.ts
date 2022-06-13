import { Module } from '@nestjs/common';
import { GigGalleryService } from './gig-gallery.service';
import { GigGalleryResolver } from './gig-gallery.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GigGallery } from './entities/gig-gallery.entity';
import { File } from 'src/files/entities/file.entity';
import { GigGalleryController } from './gig-gallery.controller';
import { FilesService } from 'src/files/files.service';

@Module({
  imports: [TypeOrmModule.forFeature([GigGallery, File])],
  providers: [GigGalleryResolver, GigGalleryService, FilesService],
  controllers: [GigGalleryController],
})
export class GigGalleryModule {}
