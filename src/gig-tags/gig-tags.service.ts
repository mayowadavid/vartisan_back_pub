import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GigTag } from './entities/gig-tag.entity';
import { UpdateGigTagInput } from './dto/update-gig-tag.input';
import { CreateGigTagInput } from './dto/create-gig-tag.input';

@Injectable()
export class GigTagsService {
  constructor(
    @InjectRepository(GigTag) private gigTagRepository: Repository<GigTag>,
  ) {}
  create(GigTagInput: CreateGigTagInput): Promise<GigTag> {
    const gigTag = this.gigTagRepository.create(GigTagInput);
    return this.gigTagRepository.save(gigTag);
  }

  findAll(): Promise<GigTag[]> {
    return this.gigTagRepository.find();
  }

  findOne(id: string): Promise<GigTag> {
    return this.gigTagRepository.findOne(id);
  }

  async update(id: string, updateGigTagInput: UpdateGigTagInput) {
    const gigtag = await this.gigTagRepository.findOne(id);
    const clean = (obj) => {
      for (const prop in obj) {
        if (obj[prop] === null || obj[prop] === undefined) {
          delete obj[prop];
        }
      }
      return obj;
    };
    const value = clean(updateGigTagInput);
    const result = { ...gigtag, ...value };
    return this.gigTagRepository.save(result);
  }

  async remove(id: string): Promise<any> {
    const message = 'tag removed successfully';
    const deleteGigTag = await this.gigTagRepository.findOne(id);
    await this.gigTagRepository.remove(deleteGigTag);
    return message;
  }
}
