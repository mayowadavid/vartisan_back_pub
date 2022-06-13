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
import { BlogService } from './blog.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/users/gql-users.guard';
import { CurrentUser } from 'src/users/current-user';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Post('imageUpload')
  @UseInterceptors(FilesInterceptor('file'))
  @UseGuards(GqlAuthGuard)
  async addImage(
    @Req() request,
    @Res() response,
    @CurrentUser() user,
    @UploadedFiles() files: Express.Multer.File,
  ) {
    return await this.blogService.upload(files, request, user, response);
  }
}
