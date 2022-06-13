import { Injectable } from '@nestjs/common';
import { CreateFaqImageInput } from './dto/create-faq-image.input';
import { UpdateFaqImageInput } from './dto/update-faq-image.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FaqImage } from './entities/faq-image.entity';
import { FilesService } from 'src/files/files.service';

@Injectable()
export class FaqImageService {
  constructor(
    @InjectRepository(FaqImage)
    private faqImageRepository: Repository<FaqImage>,
    private fileService: FilesService,
  ) {}

  async create(createFaqImageInput: CreateFaqImageInput): Promise<FaqImage> {
    const faqImage = await this.faqImageRepository.create(createFaqImageInput);
    return this.faqImageRepository.save(faqImage);
  }

  findAll(): Promise<FaqImage[]> {
    return this.faqImageRepository.find();
  }

  findOne(id: string): Promise<FaqImage> {
    return this.faqImageRepository.findOne(id);
  }

  async upload(files, request, response): Promise<any[]> {
    const Images = [];
    for (let x = 0; x < files.length; x++) {
      const imageBuffer = files[x].buffer;
      const filename = files[x].originalname;
      let fileType: string;
      const imageType = [
        'image/jpeg',
        'image/png',
        'image/tiff',
        'image/svg+xml',
      ];
      const audioType = ['audio/mpeg'];
      const videoType = ['video/mpeg', 'video/mp4'];
      const documentType = [
        'application/msword',
        'application/gzip',
        'application/vnd.oasis.opendocument.text',
        'application/pdf',
        'application/vnd.ms-powerpoint',
        'application/vnd.rar',
        'video/mp2t',
        'text/plain',
        'application/zip',
        '	application/x-7z-compressed',
      ];
      const gifType = ['image/gif'];
      if (imageType.includes(files[x].mimetype)) {
        fileType = 'image';
      } else if (audioType.includes(files[x].mimetype)) {
        fileType = 'audio';
      } else if (videoType.includes(files[x].mimetype)) {
        fileType = 'video';
      } else if (documentType.includes(files[x].mimetype)) {
        fileType = 'document';
      } else if (gifType.includes(files[x].mimetype)) {
        fileType = 'gif';
      } else {
        return response.status(200).json('invalid file type');
      }
      await this.fileService
        .uploadPublicFile(imageBuffer, filename, fileType)
        .then((result) => Images.push(result));
    }

    const FaqImageContent = new FaqImage();
    FaqImageContent.file = Images;
    const data = await this.faqImageRepository.save(FaqImageContent);
    return response.status(200).json(data);
  }

  update(
    id: string,
    updateFaqImageInput: UpdateFaqImageInput,
  ): Promise<FaqImage> {
    const faqImage: FaqImage =
      this.faqImageRepository.create(updateFaqImageInput);
    faqImage.id = id;
    return this.faqImageRepository.save(faqImage);
  }

  async remove(id: string): Promise<FaqImage> {
    const deleteFaqImage = await this.faqImageRepository.findOne(id, {
      relations: ['bannerImage', 'displayBanner', 'home'],
    });
    await this.faqImageRepository.remove(deleteFaqImage);
    return deleteFaqImage;
  }
}
