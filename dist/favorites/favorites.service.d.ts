import { CreateFavoriteInput } from './dto/create-favorite.input';
import { UpdateFavoriteInput } from './dto/update-favorite.input';
import { Favorite } from './entities/favorite.entity';
import { Repository } from 'typeorm';
export declare class FavoritesService {
    private favoriteRepository;
    constructor(favoriteRepository: Repository<Favorite>);
    create(createFavoriteInput: CreateFavoriteInput): Promise<Favorite>;
    findAll(): Promise<Favorite[]>;
    findOne(id: string): Promise<Favorite>;
    update(id: string, updateFavoriteInput: UpdateFavoriteInput): Promise<Favorite>;
    remove(id: string): Promise<Favorite>;
}
