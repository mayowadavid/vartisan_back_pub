import { FaqImageService } from './faq-image.service';
import { FaqImage } from './entities/faq-image.entity';
import { CreateFaqImageInput } from './dto/create-faq-image.input';
import { UpdateFaqImageInput } from './dto/update-faq-image.input';
export declare class FaqImageResolver {
    private readonly faqImageService;
    constructor(faqImageService: FaqImageService);
    createFaqImage(createFaqImageInput: CreateFaqImageInput): Promise<FaqImage>;
    findAll(): Promise<FaqImage[]>;
    findOne(id: string): Promise<FaqImage>;
    updateFaqImage(updateFaqImageInput: UpdateFaqImageInput): Promise<FaqImage>;
    removeFaqImage(id: string): Promise<FaqImage>;
}
