import { Injectable } from '@nestjs/common';
import { CreateGigGalleryInput } from './dto/create-gig-gallery.input';
import { UpdateGigGalleryInput } from './dto/update-gig-gallery.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GigGallery } from './entities/gig-gallery.entity';
import { FilesService } from 'src/files/files.service';

@Injectable()
export class GigGalleryService {
  constructor(
    @InjectRepository(GigGallery)
    private gigGalleryRepository: Repository<GigGallery>,
    private fileService: FilesService,
  ) {}

  create(createGigGalleryInput: CreateGigGalleryInput): Promise<GigGallery> {
    const gigGallery = this.gigGalleryRepository.create(createGigGalleryInput);
    return this.gigGalleryRepository.save(gigGallery);
  }

  findAll() {
    return this.gigGalleryRepository.find({ relations: ['file'] });
  }

  findOne(id: string): Promise<GigGallery> {
    return this.gigGalleryRepository.findOne(id, { relations: ['file'] });
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
    const { name, selected, gigId, id } = request.body;
    const GigGalleryContent = new GigGallery();
    GigGalleryContent.id = id;
    GigGalleryContent.name = name;
    GigGalleryContent.file = Images;
    GigGalleryContent.gigId = gigId;
    GigGalleryContent.selected = selected;
    const clean = (obj) => {
      for (const prop in obj) {
        if (obj[prop] === null || obj[prop] === undefined) {
          delete obj[prop];
        }
      }
      return obj;
    };
    const value = clean(GigGalleryContent);
    const data = await this.gigGalleryRepository.save(value);
    return response.status(200).json(data);
  }

  async update(id: string, updateGigGalleryInput: UpdateGigGalleryInput) {
    const allGigGallery = await this.gigGalleryRepository.findOne(id);
    const clean = (obj) => {
      for (const prop in obj) {
        if (obj[prop] === null || obj[prop] === undefined) {
          delete obj[prop];
        }
      }
      return obj;
    };
    const value = clean(updateGigGalleryInput);
    const result = { ...allGigGallery, ...value };
    return this.gigGalleryRepository.save(result);
  }

  async remove(id: string) {
    const deleteGigGallery = await this.gigGalleryRepository.findOne(id);
    await this.gigGalleryRepository.remove(deleteGigGallery);
    return deleteGigGallery;
  }
}
