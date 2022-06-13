import { Injectable } from '@nestjs/common';
import { CreateFeaturedInput } from './dto/create-featured.input';
import { UpdateFeaturedInput } from './dto/update-featured.input';
import { Featured } from './entities/featured.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class FeaturedService {
  constructor(
    @InjectRepository(Featured)
    private featuredRepository: Repository<Featured>,
  ) {}

  create(createFeaturedInput: CreateFeaturedInput): Promise<Featured> {
    const featured = this.featuredRepository.create(createFeaturedInput);
    return this.featuredRepository.save(featured);
  }

  findAll(): Promise<Featured[]> {
    return this.featuredRepository.find();
  }

  findOne(id: string): Promise<Featured> {
    return this.featuredRepository.findOne(id);
  }

  update(
    id: string,
    updateFeaturedInput: UpdateFeaturedInput,
  ): Promise<Featured> {
    const featured: Featured =
      this.featuredRepository.create(updateFeaturedInput);
    featured.id = id;
    return this.featuredRepository.save(featured);
  }

  async remove(id: string): Promise<Featured> {
    const deleteFeatured = await this.featuredRepository.findOne(id, {
      relations: ['employees'],
    });
    await this.featuredRepository.remove(deleteFeatured);
    return deleteFeatured;
  }
}
