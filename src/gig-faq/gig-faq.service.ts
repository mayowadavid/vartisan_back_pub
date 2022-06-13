import { Injectable } from '@nestjs/common';
import { CreateGigFaqInput } from './dto/create-gig-faq.input';
import { UpdateGigFaqInput } from './dto/update-gig-faq.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GigFaq } from './entities/gig-faq.entity';

@Injectable()
export class GigFaqService {
  constructor(
    @InjectRepository(GigFaq) private gigFaqRepository: Repository<GigFaq>,
  ) {}
  create(createGigFaqInput: CreateGigFaqInput): Promise<GigFaq> {
    const GigFaq = this.gigFaqRepository.create(createGigFaqInput);
    return this.gigFaqRepository.save(GigFaq);
  }

  findAll(): Promise<GigFaq[]> {
    return this.gigFaqRepository.find({
      relations: ['gig'],
    });
  }

  findOne(id: string): Promise<GigFaq> {
    return this.gigFaqRepository.findOne(id, {
      relations: ['gig'],
    });
  }

  update(id: string, updateGigFaqInput: UpdateGigFaqInput): Promise<GigFaq> {
    const gigFaq: GigFaq = this.gigFaqRepository.create(updateGigFaqInput);
    gigFaq.id = id;
    return this.gigFaqRepository.save(gigFaq);
  }

  async remove(id: string): Promise<string> {
    const success = new CreateGigFaqInput();
    success.name = 'delete successful';
    const deleteGigFaq = await this.gigFaqRepository.findOne(id, {
      relations: ['gig'],
    });
    await this.gigFaqRepository.remove(deleteGigFaq);
    return success.name;
  }
}
