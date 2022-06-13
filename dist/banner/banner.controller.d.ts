/// <reference types="multer" />
import { BannerService } from './banner.service';
export declare class BannerController {
    private readonly bannerService;
    constructor(bannerService: BannerService);
    addImage(request: any, response: any, files: Express.Multer.File): Promise<any[]>;
}
