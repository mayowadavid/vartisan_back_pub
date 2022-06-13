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
import { GigVideoService } from './gig-video.service';
@Controller('gig-video')
export class GigVideoController {
  constructor(private readonly gigVideoService: GigVideoService) {}

  @Post('imageUpload')
  @UseInterceptors(FilesInterceptor('file'))
  async addImage(
    @Req() request,
    @Res() response,
    @UploadedFiles() files: Express.Multer.File,
  ) {
    return await this.gigVideoService.upload(files, request, response);
  }
}
