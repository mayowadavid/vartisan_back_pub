/// <reference types="multer" />
import { GigVideoService } from './gig-video.service';
export declare class GigVideoController {
    private readonly gigVideoService;
    constructor(gigVideoService: GigVideoService);
    addImage(request: any, response: any, files: Express.Multer.File): Promise<any[]>;
}
