/// <reference types="multer" />
import { ReferenceService } from './reference.service';
export declare class ReferenceController {
    private readonly referenceService;
    constructor(referenceService: ReferenceService);
    addImage(request: any, response: any, user: any, files: Express.Multer.File): Promise<any[]>;
}
