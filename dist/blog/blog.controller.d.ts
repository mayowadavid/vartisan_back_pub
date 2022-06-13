/// <reference types="multer" />
import { BlogService } from './blog.service';
export declare class BlogController {
    private readonly blogService;
    constructor(blogService: BlogService);
    addImage(request: any, response: any, user: any, files: Express.Multer.File): Promise<any[]>;
}
