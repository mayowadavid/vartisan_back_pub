import { Injectable } from '@nestjs/common';
import { CreateBannerInput } from './dto/create-banner.input';
import { UpdateBannerInput } from './dto/update-banner.input';
import { Banner } from './entities/banner.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FilesService } from 'src/files/files.service';

@Injectable()
export class BannerService {
  constructor(
    @InjectRepository(Banner) private bannerRepository: Repository<Banner>,
    private fileService: FilesService,
  ) {}
  create(createBannerInput: CreateBannerInput): Promise<Banner> {
    const banner = this.bannerRepository.create(createBannerInput);
    return this.bannerRepository.save(banner);
  }

  findAll(): Promise<Banner[]> {
    return this.bannerRepository.find({
      relations: ['file'],
    });
  }

  findOne(id: string): Promise<Banner> {
    return this.bannerRepository.findOne(id, {
      relations: ['file'],
    });
  }

  update(id: string, updateBannerInput: UpdateBannerInput): Promise<Banner> {
    const banner: Banner = this.bannerRepository.create(updateBannerInput);
    banner.id = id;
    return this.bannerRepository.save(banner);
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
    const {
      bannerTitle,
      bannerDescription,
      bannerFirstActionTitle,
      bannerSecondACtionTitle,
      bannerMiddleContent,
    } = request.body;
    const homeBanner = new Banner();
    homeBanner.bannerTitle = bannerTitle;
    homeBanner.bannerDescription = bannerDescription;
    homeBanner.bannerFirstActionTitle = bannerFirstActionTitle;
    homeBanner.bannerSecondACtionTitle = bannerSecondACtionTitle;
    homeBanner.bannerMiddleContent = bannerMiddleContent;
    homeBanner.file = Images;
    const data = await this.bannerRepository.save(homeBanner);
    return response.status(200).json(data);
  }

  async remove(id: string): Promise<Banner> {
    const deleteBanner = await this.bannerRepository.findOne(id, {
      relations: ['file'],
    });
    await this.bannerRepository.remove(deleteBanner);
    return deleteBanner;
  }
}
