import { GigService } from './gig.service';
import { Gig } from './entities/gig.entity';
import { CreateGigInput, UserGigInput } from './dto/create-gig.input';
import { UpdateGigInput } from './dto/update-gig.input';
export declare class GigResolver {
    private readonly gigService;
    constructor(gigService: GigService);
    createGig(user: any, createGigInput: CreateGigInput): Promise<Gig>;
    findAll(): Promise<Gig[]>;
    findOne(id: string): Promise<Gig>;
    findGigByUser(userGigInput: UserGigInput): Promise<Gig>;
    findAllUserGig(user: any): Promise<Gig[]>;
    updateGig(updateGigInput: UpdateGigInput): Promise<Gig>;
    removeGig(id: string): Promise<any>;
}
