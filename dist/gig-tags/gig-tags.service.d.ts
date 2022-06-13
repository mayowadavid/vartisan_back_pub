import { Repository } from 'typeorm';
import { GigTag } from './entities/gig-tag.entity';
import { UpdateGigTagInput } from './dto/update-gig-tag.input';
import { CreateGigTagInput } from './dto/create-gig-tag.input';
export declare class GigTagsService {
    private gigTagRepository;
    constructor(gigTagRepository: Repository<GigTag>);
    create(GigTagInput: CreateGigTagInput): Promise<GigTag>;
    findAll(): Promise<GigTag[]>;
    findOne(id: string): Promise<GigTag>;
    update(id: string, updateGigTagInput: UpdateGigTagInput): Promise<any>;
    remove(id: string): Promise<any>;
}
