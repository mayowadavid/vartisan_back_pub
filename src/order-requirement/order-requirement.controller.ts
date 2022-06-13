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
import { OrderRequirementService } from './order-requirement.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/users/gql-users.guard';

@Controller('order-requirement')
export class OrderRequirementController {
  constructor(
    private readonly orderRequirementService: OrderRequirementService,
  ) {}

  @Post('imageUpload')
  @UseGuards(GqlAuthGuard)
  @UseInterceptors(FilesInterceptor('file'))
  async addImage(
    @Req() request,
    @Res() response,
    @UploadedFiles() files: Express.Multer.File,
  ) {
    return await this.orderRequirementService.upload(files, request, response);
  }
}
