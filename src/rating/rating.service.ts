import { Injectable } from '@nestjs/common';
import { CreateRatingInput } from './dto/create-rating.input';
import { UpdateRatingInput } from './dto/update-rating.input';
import { Rating } from './entities/rating.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RatingService {
  constructor(
    @InjectRepository(Rating) private ratingRepository: Repository<Rating>,
  ) {}
  create(createRatingInput: CreateRatingInput): Promise<Rating> {
    const rating = this.ratingRepository.create(createRatingInput);
    return this.ratingRepository.save(rating);
  }

  findAll(): Promise<Rating[]> {
    return this.ratingRepository.find({
      relations: ['gig'],
    });
  }

  findOne(id: string): Promise<Rating> {
    return this.ratingRepository.findOne(id, {
      relations: ['gig'],
    });
  }

  update(id: string, updateRatingInput: UpdateRatingInput): Promise<Rating> {
    const rating: Rating = this.ratingRepository.create(updateRatingInput);
    rating.id = id;
    return this.ratingRepository.save(rating);
  }

  async remove(id: string): Promise<Rating> {
    const deleteRating = await this.ratingRepository.findOne(id, {
      relations: ['gig'],
    });
    await this.ratingRepository.remove(deleteRating);
    return deleteRating;
  }
}
