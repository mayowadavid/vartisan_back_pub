import { CreateFaqImageInput } from './dto/create-faq-image.input';
import { UpdateFaqImageInput } from './dto/update-faq-image.input';
import { Repository } from 'typeorm';
import { FaqImage } from './entities/faq-image.entity';
import { FilesService } from 'src/files/files.service';
export declare class FaqImageService {
    private faqImageRepository;
    private fileService;
    constructor(faqImageRepository: Repository<FaqImage>, fileService: FilesService);
    create(createFaqImageInput: CreateFaqImageInput): Promise<FaqImage>;
    findAll(): Promise<FaqImage[]>;
    findOne(id: string): Promise<FaqImage>;
    upload(files: any, request: any, response: any): Promise<any[]>;
    update(id: string, updateFaqImageInput: UpdateFaqImageInput): Promise<FaqImage>;
    remove(id: string): Promise<FaqImage>;
}
