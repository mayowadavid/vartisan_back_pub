import { Injectable } from '@nestjs/common';
import { CreateHomeFaqInput } from './dto/create-home-faq.input';
import { UpdateHomeFaqInput } from './dto/update-home-faq.input';
import { HomeFaq } from './entities/home-faq.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class HomeFaqService {
  constructor(
    @InjectRepository(HomeFaq) private homeFaqRepository: Repository<HomeFaq>,
  ) {}

  create(createHomeFaqInput: CreateHomeFaqInput): Promise<HomeFaq> {
    const home = this.homeFaqRepository.create(createHomeFaqInput);
    return this.homeFaqRepository.save(home);
  }

  findAll(): Promise<HomeFaq[]> {
    return this.homeFaqRepository.find({
      relations: ['file'],
    });
  }

  findOne(id: string): Promise<HomeFaq> {
    return this.homeFaqRepository.findOne(id, {
      relations: ['file'],
    });
  }

  update(id: string, updateHomeFaqInput: UpdateHomeFaqInput): Promise<HomeFaq> {
    const homeFaq: HomeFaq = this.homeFaqRepository.create(updateHomeFaqInput);
    homeFaq.id = id;
    return this.homeFaqRepository.save(homeFaq);
  }

  async remove(id: string): Promise<HomeFaq> {
    const deleteHome = await this.homeFaqRepository.findOne(id, {
      relations: ['file'],
    });
    await this.homeFaqRepository.remove(deleteHome);
    return deleteHome;
  }
}
