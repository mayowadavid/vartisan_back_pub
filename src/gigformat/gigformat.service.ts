import { Injectable } from '@nestjs/common';
import { CreateGigformatInput } from './dto/create-gigformat.input';
import { UpdateGigformatInput } from './dto/update-gigformat.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Gigformat } from './entities/gigformat.entity';

@Injectable()
export class GigformatService {
  constructor(
    @InjectRepository(Gigformat)
    private gigFormatRepository: Repository<Gigformat>,
  ) {}
  create(createGigformatInput: CreateGigformatInput): Promise<Gigformat> {
    const gigFormat = this.gigFormatRepository.create(createGigformatInput);
    return this.gigFormatRepository.save(gigFormat);
  }

  findAll(): Promise<Gigformat[]> {
    return this.gigFormatRepository.find({
      relations: ['gig'],
    });
  }

  findOne(id: string): Promise<Gigformat> {
    return this.gigFormatRepository.findOne(id, { relations: ['gig'] });
  }

  async update(
    id: string,
    updateGigformatInput: UpdateGigformatInput,
  ): Promise<Gigformat> {
    const gigformat: Gigformat = await this.gigFormatRepository.findOne(id);
    const clean = (obj) => {
      for (const prop in obj) {
        if (obj[prop] === null || obj[prop] === undefined) {
          delete obj[prop];
        }
      }
      return obj;
    };
    const value = clean(updateGigformatInput);
    const result = { ...gigformat, ...value };
    return this.gigFormatRepository.save(result);
  }

  async remove(id: string): Promise<Gigformat> {
    const deleteGigformat = await this.gigFormatRepository.findOne(id, {
      relations: ['gig'],
    });
    await this.gigFormatRepository.remove(deleteGigformat);
    return deleteGigformat;
  }
}
