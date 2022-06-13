import { CreateHomeFaqInput } from './dto/create-home-faq.input';
import { UpdateHomeFaqInput } from './dto/update-home-faq.input';
import { HomeFaq } from './entities/home-faq.entity';
import { Repository } from 'typeorm';
export declare class HomeFaqService {
    private homeFaqRepository;
    constructor(homeFaqRepository: Repository<HomeFaq>);
    create(createHomeFaqInput: CreateHomeFaqInput): Promise<HomeFaq>;
    findAll(): Promise<HomeFaq[]>;
    findOne(id: string): Promise<HomeFaq>;
    update(id: string, updateHomeFaqInput: UpdateHomeFaqInput): Promise<HomeFaq>;
    remove(id: string): Promise<HomeFaq>;
}
