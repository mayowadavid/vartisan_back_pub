import { Injectable } from '@nestjs/common';
import { CreateGigVideoInput } from './dto/create-gig-video.input';
import { UpdateGigVideoInput } from './dto/update-gig-video.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GigVideo } from './entities/gig-video.entity';
import { FilesService } from 'src/files/files.service';

@Injectable()
export class GigVideoService {
  constructor(
    @InjectRepository(GigVideo)
    private gigVideoRepository: Repository<GigVideo>,
    private fileService: FilesService,
  ) {}

  create(createGigVideoInput: CreateGigVideoInput): Promise<GigVideo> {
    const gigVideo = this.gigVideoRepository.create(createGigVideoInput);
    return this.gigVideoRepository.save(gigVideo);
  }

  findAll() {
    return this.gigVideoRepository.find({ relations: ['file'] });
  }

  findOne(id: string): Promise<GigVideo> {
    return this.gigVideoRepository.findOne(id, { relations: ['file'] });
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
    const { name, selected, gigId } = request.body;
    const GigVideoContent = new GigVideo();
    GigVideoContent.name = name;
    GigVideoContent.file = Images;
    GigVideoContent.selected = selected;
    GigVideoContent.gigId = gigId;
    const data = await this.gigVideoRepository.save(GigVideoContent);
    return response.status(200).json(data);
  }

  async update(id: string, updateGigVideoInput: UpdateGigVideoInput) {
    const allGigVideo = await this.gigVideoRepository.findOne(id);
    const clean = (obj) => {
      for (const prop in obj) {
        if (obj[prop] === null || obj[prop] === undefined) {
          delete obj[prop];
        }
      }
      return obj;
    };
    const value = clean(updateGigVideoInput);
    const result = { ...allGigVideo, ...value };
    return this.gigVideoRepository.save(result);
  }

  async remove(id: string) {
    const deleteGigVideo = await this.gigVideoRepository.findOne(id);
    await this.gigVideoRepository.remove(deleteGigVideo);
    return deleteGigVideo;
  }
}
