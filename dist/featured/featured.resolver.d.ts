import { FeaturedService } from './featured.service';
import { Featured } from './entities/featured.entity';
import { CreateFeaturedInput } from './dto/create-featured.input';
import { UpdateFeaturedInput } from './dto/update-featured.input';
export declare class FeaturedResolver {
    private readonly featuredService;
    constructor(featuredService: FeaturedService);
    createFeatured(createFeaturedInput: CreateFeaturedInput): Promise<Featured>;
    findAll(): Promise<Featured[]>;
    findOne(id: string): Promise<Featured>;
    updateFeatured(updateFeaturedInput: UpdateFeaturedInput): Promise<Featured>;
    removeFeatured(id: string): Promise<Featured>;
}
