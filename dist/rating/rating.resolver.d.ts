import { RatingService } from './rating.service';
import { Rating } from './entities/rating.entity';
import { CreateRatingInput } from './dto/create-rating.input';
import { UpdateRatingInput } from './dto/update-rating.input';
export declare class RatingResolver {
    private readonly ratingService;
    constructor(ratingService: RatingService);
    createRating(createRatingInput: CreateRatingInput): Promise<Rating>;
    findAll(): Promise<Rating[]>;
    findOne(id: string): Promise<Rating>;
    updateRating(updateRatingInput: UpdateRatingInput): Promise<Rating>;
    removeRating(id: string): Promise<Rating>;
}
