import { GigFaqService } from './gig-faq.service';
import { GigFaq } from './entities/gig-faq.entity';
import { CreateGigFaqInput } from './dto/create-gig-faq.input';
import { UpdateGigFaqInput } from './dto/update-gig-faq.input';
export declare class GigFaqResolver {
    private readonly gigFaqService;
    constructor(gigFaqService: GigFaqService);
    createGigFaq(createGigFaqInput: CreateGigFaqInput): Promise<GigFaq>;
    findAll(): Promise<GigFaq[]>;
    findOne(id: string): Promise<GigFaq>;
    updateGigFaq(updateGigFaqInput: UpdateGigFaqInput): Promise<GigFaq>;
    removeGigFaq(id: string): Promise<string>;
}
