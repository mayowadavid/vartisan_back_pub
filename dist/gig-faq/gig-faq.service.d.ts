import { CreateGigFaqInput } from './dto/create-gig-faq.input';
import { UpdateGigFaqInput } from './dto/update-gig-faq.input';
import { Repository } from 'typeorm';
import { GigFaq } from './entities/gig-faq.entity';
export declare class GigFaqService {
    private gigFaqRepository;
    constructor(gigFaqRepository: Repository<GigFaq>);
    create(createGigFaqInput: CreateGigFaqInput): Promise<GigFaq>;
    findAll(): Promise<GigFaq[]>;
    findOne(id: string): Promise<GigFaq>;
    update(id: string, updateGigFaqInput: UpdateGigFaqInput): Promise<GigFaq>;
    remove(id: string): Promise<string>;
}
