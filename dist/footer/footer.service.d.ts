import { CreateFooterInput } from './dto/create-footer.input';
import { UpdateFooterInput } from './dto/update-footer.input';
import { Repository } from 'typeorm';
import { Footer } from './entities/footer.entity';
export declare class FooterService {
    private footerRepository;
    constructor(footerRepository: Repository<Footer>);
    create(createFooterInput: CreateFooterInput): Promise<Footer>;
    findAll(): Promise<Footer[]>;
    findOne(id: string): Promise<Footer>;
    update(id: string, updateFooterInput: UpdateFooterInput): Promise<Footer>;
    remove(id: string): Promise<Footer>;
}
