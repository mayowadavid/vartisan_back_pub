import { Injectable } from '@nestjs/common';
import { CreateFavoriteInput } from './dto/create-favorite.input';
import { UpdateFavoriteInput } from './dto/update-favorite.input';
import { Favorite } from './entities/favorite.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class FavoritesService {
  constructor(
    @InjectRepository(Favorite)
    private favoriteRepository: Repository<Favorite>,
  ) {}

  create(createFavoriteInput: CreateFavoriteInput): Promise<Favorite> {
    const fav = this.favoriteRepository.create(createFavoriteInput);
    return this.favoriteRepository.save(fav);
  }

  findAll(): Promise<Favorite[]> {
    return this.favoriteRepository.find({
      relations: ['gig', 'user'],
    });
  }

  findOne(id: string): Promise<Favorite> {
    return this.favoriteRepository.findOne(id, { relations: ['gig', 'user'] });
  }

  update(
    id: string,
    updateFavoriteInput: UpdateFavoriteInput,
  ): Promise<Favorite> {
    const Favorite: Favorite =
      this.favoriteRepository.create(updateFavoriteInput);
    Favorite.id = id;
    return this.favoriteRepository.save(Favorite);
  }

  async remove(id: string): Promise<Favorite> {
    const deleteFavorite = await this.favoriteRepository.findOne(id, {
      relations: ['gig', 'user'],
    });
    await this.favoriteRepository.remove(deleteFavorite);
    return deleteFavorite;
  }
}
