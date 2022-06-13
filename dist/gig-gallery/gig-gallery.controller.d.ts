/// <reference types="multer" />
import { GigGalleryService } from './gig-gallery.service';
export declare class GigGalleryController {
    private readonly gigGalleryService;
    constructor(gigGalleryService: GigGalleryService);
    addImage(request: any, response: any, files: Express.Multer.File): Promise<any[]>;
}
