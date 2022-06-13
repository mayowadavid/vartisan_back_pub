/// <reference types="multer" />
import { FilesService } from './files.service';
export declare class FilesController {
    private readonly fileService;
    constructor(fileService: FilesService);
    addImage(request: any, response: any, files: Express.Multer.File): Promise<any[]>;
}
