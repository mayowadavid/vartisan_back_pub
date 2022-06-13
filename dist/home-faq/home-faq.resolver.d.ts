import { HomeFaqService } from './home-faq.service';
import { HomeFaq } from './entities/home-faq.entity';
import { CreateHomeFaqInput } from './dto/create-home-faq.input';
import { UpdateHomeFaqInput } from './dto/update-home-faq.input';
export declare class HomeFaqResolver {
    private readonly homeFaqService;
    constructor(homeFaqService: HomeFaqService);
    createHomeFaq(createHomeFaqInput: CreateHomeFaqInput): Promise<HomeFaq>;
    findAll(): Promise<HomeFaq[]>;
    findOne(id: string): Promise<HomeFaq>;
    updateHomeFaq(updateHomeFaqInput: UpdateHomeFaqInput): Promise<HomeFaq>;
    removeHomeFaq(id: string): Promise<HomeFaq>;
}
