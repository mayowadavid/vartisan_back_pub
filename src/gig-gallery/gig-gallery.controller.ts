import {
  Controller,
  Post,
  Req,
  Res,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { Express } from 'express';
import { FilesInterceptor } from '@nestjs/platform-express';
import { GigGalleryService } from './gig-gallery.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/users/gql-users.guard';

@Controller('gig-gallery')
export class GigGalleryController {
  constructor(private readonly gigGalleryService: GigGalleryService) {}

  @Post('imageUpload')
  @UseGuards(GqlAuthGuard)
  @UseInterceptors(FilesInterceptor('file'))
  async addImage(
    @Req() request,
    @Res() response,
    @UploadedFiles() files: Express.Multer.File,
  ) {
    return await this.gigGalleryService.upload(files, request, response);
  }
}
