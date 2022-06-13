import { FooterService } from './footer.service';
import { Footer } from './entities/footer.entity';
import { CreateFooterInput } from './dto/create-footer.input';
import { UpdateFooterInput } from './dto/update-footer.input';
export declare class FooterResolver {
    private readonly footerService;
    constructor(footerService: FooterService);
    createFooter(createFooterInput: CreateFooterInput): Promise<Footer>;
    findAll(): Promise<Footer[]>;
    findOne(id: string): Promise<Footer>;
    updateFooter(updateFooterInput: UpdateFooterInput): Promise<Footer>;
    removeFooter(id: string): Promise<Footer>;
}
