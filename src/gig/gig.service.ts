import { Injectable } from '@nestjs/common';
import { CreateGigInput } from './dto/create-gig.input';
import { UpdateGigInput } from './dto/update-gig.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Gig } from './entities/gig.entity';

@Injectable()
export class GigService {
  constructor(@InjectRepository(Gig) private gigRepository: Repository<Gig>) {}

  async create(user, createGigInput: CreateGigInput): Promise<Gig> {
    const gig = this.gigRepository.create(createGigInput);
    gig.user = user;
    return this.gigRepository.save(gig);
  }

  findAll(): Promise<Gig[]> {
    return this.gigRepository.find({
      relations: [
        'rushOrder',
        'commercialUse',
        'privateCommission',
        'category',
        'subCategory',
        'favorite',
        'user',
        'order',
        'gigTag',
        'gigFaq',
        'gigRequirement',
        'gigVideo',
        'gigVideo.file',
        'gigGallery',
        'gigGallery.file',
        'rating',
        'gigFormat',
        'referenceGig',
      ],
    });
  }

  findOne(id: string): Promise<Gig> {
    return this.gigRepository.findOne(id, {
      relations: [
        'rushOrder',
        'commercialUse',
        'privateCommission',
        'category',
        'subCategory',
        'favorite',
        'user',
        'order',
        'gigTag',
        'gigFaq',
        'gigRequirement',
        'gigVideo',
        'gigVideo.file',
        'gigGallery',
        'gigGallery.file',
        'rating',
        'gigFormat',
        'referenceGig',
      ],
    });
  }

  async findGigByUser(name: string, userName: string): Promise<Gig> {
    const allGigs = await this.gigRepository.findOne({
      relations: [
        'rushOrder',
        'commercialUse',
        'privateCommission',
        'category',
        'favorite',
        'user',
        'user.profile',
        'user.profile.file',
        'order',
        'gigVideo',
        'gigVideo.file',
        'gigGallery',
        'gigGallery.file',
        'rating',
        'gigFormat',
        'referenceGig',
      ],
      where: {
        name,
        user: {
          userName,
        },
      },
    });
    return allGigs;
  }

  async findAllUserGig(user): Promise<Gig[]> {
    const { userName } = await user;
    console.log(userName);
    const allUserGigs = await this.gigRepository.find({
      relations: [
        'rushOrder',
        'commercialUse',
        'privateCommission',
        'category',
        'favorite',
        'user',
        'user.profile',
        'user.profile.file',
        'order',
        'gigVideo',
        'gigVideo.file',
        'gigGallery',
        'gigGallery.file',
        'rating',
        'gigFormat',
        'referenceGig',
      ],
      where: {
        user: {
          userName,
        },
      },
    });
    return allUserGigs;
  }

  async update(id: string, updateGigInput: UpdateGigInput): Promise<Gig> {
    const allGigs = await this.gigRepository.findOne(id);
    const clean = (obj) => {
      for (const prop in obj) {
        if (obj[prop] === null || obj[prop] === undefined) {
          delete obj[prop];
        }
      }
      return obj;
    };
    const value = clean(updateGigInput);
    const result = { ...allGigs, ...value };
    return this.gigRepository.save(result);
  }

  async remove(id: string): Promise<any> {
    const deleteGig = await this.gigRepository.findOne(id, {
      relations: [
        'rushOrder',
        'earning',
        'commercialUse',
        'privateCommission',
        'category',
        'subCategory',
        'favorite',
        'user',
        'order',
        'gigTag',
        'gigFaq',
        'gigRequirement',
        'gigVideo',
        'gigVideo.file',
        'gigGallery',
        'gigGallery.file',
        'rating',
        'gigFormat',
        'referenceGig',
      ],
    });
    const copy = { ...deleteGig };
    const clean = (obj) => {
      for (const prop in obj) {
        if (prop !== 'id') {
          obj[prop] = null;
        }
      }
      return obj;
    };
    const value = clean(deleteGig);
    const result = await this.gigRepository.save(value);
    await this.gigRepository.remove(result);
    return copy;
  }
}
