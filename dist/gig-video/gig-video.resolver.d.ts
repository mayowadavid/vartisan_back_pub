import { GigVideoService } from './gig-video.service';
import { GigVideo } from './entities/gig-video.entity';
import { CreateGigVideoInput } from './dto/create-gig-video.input';
import { UpdateGigVideoInput } from './dto/update-gig-video.input';
export declare class GigVideoResolver {
    private readonly gigVideoService;
    constructor(gigVideoService: GigVideoService);
    createGigVideo(createGigVideoInput: CreateGigVideoInput): Promise<GigVideo>;
    findAll(): Promise<GigVideo[]>;
    findOne(id: string): Promise<GigVideo>;
    updateGigVideo(updateGigVideoInput: UpdateGigVideoInput): Promise<any>;
    removeGigVideo(id: string): Promise<GigVideo>;
}
