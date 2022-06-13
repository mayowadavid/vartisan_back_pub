import { GigTagsService } from './gig-tags.service';
import { GigTag } from './entities/gig-tag.entity';
import { UpdateGigTagInput } from './dto/update-gig-tag.input';
import { CreateGigTagInput } from './dto/create-gig-tag.input';
export declare class GigTagsResolver {
    private readonly gigTagsService;
    constructor(gigTagsService: GigTagsService);
    createGigTag(createGigTagInput: CreateGigTagInput): Promise<GigTag>;
    findAll(): Promise<GigTag[]>;
    findOne(id: string): Promise<GigTag>;
    updateGigTag(updateGigTagInput: UpdateGigTagInput): Promise<any>;
    removeGigTag(id: string): Promise<any>;
}
