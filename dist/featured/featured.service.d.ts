import { CreateFeaturedInput } from './dto/create-featured.input';
import { UpdateFeaturedInput } from './dto/update-featured.input';
import { Featured } from './entities/featured.entity';
import { Repository } from 'typeorm';
export declare class FeaturedService {
    private featuredRepository;
    constructor(featuredRepository: Repository<Featured>);
    create(createFeaturedInput: CreateFeaturedInput): Promise<Featured>;
    findAll(): Promise<Featured[]>;
    findOne(id: string): Promise<Featured>;
    update(id: string, updateFeaturedInput: UpdateFeaturedInput): Promise<Featured>;
    remove(id: string): Promise<Featured>;
}
