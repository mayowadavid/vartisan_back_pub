/// <reference types="multer" />
import { FaqImageService } from './faq-image.service';
export declare class FaqImageController {
    private readonly faqImageService;
    constructor(faqImageService: FaqImageService);
    addImage(request: any, response: any, files: Express.Multer.File): Promise<any[]>;
}
