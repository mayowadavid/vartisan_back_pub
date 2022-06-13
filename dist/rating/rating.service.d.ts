import { CreateRatingInput } from './dto/create-rating.input';
import { UpdateRatingInput } from './dto/update-rating.input';
import { Rating } from './entities/rating.entity';
import { Repository } from 'typeorm';
export declare class RatingService {
    private ratingRepository;
    constructor(ratingRepository: Repository<Rating>);
    create(createRatingInput: CreateRatingInput): Promise<Rating>;
    findAll(): Promise<Rating[]>;
    findOne(id: string): Promise<Rating>;
    update(id: string, updateRatingInput: UpdateRatingInput): Promise<Rating>;
    remove(id: string): Promise<Rating>;
}
