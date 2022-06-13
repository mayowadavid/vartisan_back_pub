import { Module } from '@nestjs/common';
import { FaqImageService } from './faq-image.service';
import { FaqImageResolver } from './faq-image.resolver';
import { FaqImageController } from './faq-image.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { File } from 'src/files/entities/file.entity';
import { FaqImage } from './entities/faq-image.entity';
import { FilesService } from 'src/files/files.service';

@Module({
  imports: [TypeOrmModule.forFeature([FaqImage, File])],
  providers: [FaqImageResolver, FaqImageService, FilesService],
  controllers: [FaqImageController],
})
export class FaqImageModule {}
