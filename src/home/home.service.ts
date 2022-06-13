import { Injectable } from '@nestjs/common';
import { CreateHomeInput } from './dto/create-home.input';
import { UpdateHomeInput } from './dto/update-home.input';
import { Home } from './entities/home.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class HomeService {
  constructor(
    @InjectRepository(Home) private homeRepository: Repository<Home>,
  ) {}

  create(createHomeInput: CreateHomeInput): Promise<Home> {
    const home = this.homeRepository.create(createHomeInput);
    return this.homeRepository.save(home);
  }

  findAll(): Promise<Home[]> {
    return this.homeRepository.find({
      relations: ['category', 'homeFaq', 'header'],
    });
  }

  findOne(id: string): Promise<Home> {
    return this.homeRepository.findOne(id, {
      relations: ['category', 'homeFaq', 'header'],
    });
  }

  update(id: string, updateHomeInput: UpdateHomeInput): Promise<Home> {
    const home: Home = this.homeRepository.create(updateHomeInput);
    home.id = id;
    return this.homeRepository.save(home);
  }

  async remove(id: string): Promise<Home> {
    const deleteHome = await this.homeRepository.findOne(id, {
      relations: ['category', 'homeFaq', 'header'],
    });
    await this.homeRepository.remove(deleteHome);
    return deleteHome;
  }
}
