import { Injectable } from '@nestjs/common';
import { CreateOrderRequirementInput } from './dto/create-order-requirement.input';
import { UpdateOrderRequirementInput } from './dto/update-order-requirement.input';
import { OrderRequirement } from './entities/order-requirement.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FilesService } from 'src/files/files.service';

@Injectable()
export class OrderRequirementService {
  constructor(
    @InjectRepository(OrderRequirement)
    private orderRequirement: Repository<OrderRequirement>,
    private fileService: FilesService,
  ) {}
  create(
    createOrderRequirementInput: CreateOrderRequirementInput,
  ): Promise<OrderRequirement> {
    const orderRequirement = this.orderRequirement.create(
      createOrderRequirementInput,
    );
    return this.orderRequirement.save(orderRequirement);
  }

  findAll(): Promise<OrderRequirement[]> {
    return this.orderRequirement.find({
      relations: ['order'],
    });
  }

  findOne(id: string): Promise<OrderRequirement> {
    return this.orderRequirement.findOne(id, {
      relations: ['order'],
    });
  }

  async upload(files, request, response): Promise<any[]> {
    let Images: any;
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
        .then((result) => (Images = result));
    }
    const { id, descriptionFile, referenceFile, colorFile } = request.body;
    const orders = await this.orderRequirement.findOne(id);
    orders.descriptionFile =
      descriptionFile !== undefined ? Images : orders.descriptionFile;
    orders.referenceFile =
      referenceFile !== undefined ? Images : orders.referenceFile;
    orders.colorFile = colorFile !== undefined ? Images : orders.colorFile;
    const data = await this.orderRequirement.save(orders);
    return response.status(200).json(data);
  }

  update(
    id: string,
    updateOrderRequirementInput: UpdateOrderRequirementInput,
  ): Promise<OrderRequirement> {
    const OrderRequirement: OrderRequirement = this.orderRequirement.create(
      updateOrderRequirementInput,
    );
    OrderRequirement.id = id;
    return this.orderRequirement.save(OrderRequirement);
  }

  async remove(id: string): Promise<OrderRequirement> {
    const deleteOrderRequirement = await this.orderRequirement.findOne(id, {
      relations: ['order'],
    });
    await this.orderRequirement.remove(deleteOrderRequirement);
    return deleteOrderRequirement;
  }
}
