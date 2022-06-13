/// <reference types="multer" />
import { ProfileService } from './profile.service';
export declare class ProfileController {
    private readonly profileService;
    constructor(profileService: ProfileService);
    addImage(request: any, response: any, user: any, files: Express.Multer.File): Promise<any[]>;
}
