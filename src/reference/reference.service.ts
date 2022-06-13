import { Injectable } from '@nestjs/common';
import { CreateReferenceInput } from './dto/create-reference.input';
import { UpdateReferenceInput } from './dto/update-reference.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reference } from './entities/reference.entity';
import { FilesService } from 'src/files/files.service';

@Injectable()
export class ReferenceService {
  constructor(
    @InjectRepository(Reference)
    private referenceRepository: Repository<Reference>,
    private fileService: FilesService,
  ) {}

  create(createReferenceInput: CreateReferenceInput): Promise<Reference> {
    const reference = this.referenceRepository.create(createReferenceInput);
    return this.referenceRepository.save(reference);
  }

  findAll(): Promise<Reference[]> {
    return this.referenceRepository.find({
      relations: ['file', 'gigReference', 'user'],
    });
  }

  findOne(id: string): Promise<Reference> {
    return this.referenceRepository.findOne(id, {
      relations: ['file', 'gigReference', 'user'],
    });
  }

  findReferenceByUser(user): Promise<Reference[]> {
    return this.referenceRepository.find({
      relations: ['file', 'gigReference', 'user'],
      where: { userId: user.id },
    });
  }

  update(
    id: string,
    updateReferenceInput: UpdateReferenceInput,
  ): Promise<Reference> {
    const reference: Reference =
      this.referenceRepository.create(updateReferenceInput);
    reference.id = id;
    return this.referenceRepository.save(reference);
  }

  async upload(files, request, user, response): Promise<any[]> {
    let imageValue: any;
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
        .then((result) => (imageValue = result));
    }
    const { name, description, selected } = request.body;
    const referenceContent = new Reference();
    referenceContent.name = name;
    referenceContent.user = user;
    referenceContent.description = description;
    referenceContent.selected = selected;
    referenceContent.file = imageValue;
    const data = await this.referenceRepository.save(referenceContent);
    return response.status(200).json(data);
  }

  async remove(id: string): Promise<Reference> {
    const deleteReference = await this.referenceRepository.findOne(id, {
      relations: ['file', 'gigReference'],
    });
    await this.referenceRepository.remove(deleteReference);
    return deleteReference;
  }
}
