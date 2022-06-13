/// <reference types="multer" />
import { CategoriesService } from './categories.service';
export declare class CategoriesController {
    private readonly categoryService;
    constructor(categoryService: CategoriesService);
    addImage(request: any, response: any, files: Express.Multer.File): Promise<any[]>;
}
