import { Module } from '@nestjs/common';
import { BannerService } from './banner.service';
import { BannerResolver } from './banner.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Banner } from './entities/banner.entity';
import { FilesModule } from 'src/files/files.module';
import { BannerController } from './banner.controller';
import { FilesService } from 'src/files/files.service';
import { File } from 'src/files/entities/file.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Banner, File]), FilesModule],
  providers: [BannerResolver, BannerService, FilesService],
  controllers: [BannerController],
})
export class BannerModule {}
