import { FavoritesService } from './favorites.service';
import { Favorite } from './entities/favorite.entity';
import { CreateFavoriteInput } from './dto/create-favorite.input';
import { UpdateFavoriteInput } from './dto/update-favorite.input';
export declare class FavoritesResolver {
    private readonly favoritesService;
    constructor(favoritesService: FavoritesService);
    createFavorite(createFavoriteInput: CreateFavoriteInput): Promise<Favorite>;
    findAll(): Promise<Favorite[]>;
    findOne(id: string): Promise<Favorite>;
    updateFavorite(updateFavoriteInput: UpdateFavoriteInput): Promise<Favorite>;
    removeFavorite(id: string): Promise<Favorite>;
}
