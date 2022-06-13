/// <reference types="node" />
import { UpdateFileInput } from './dto/update-file.input';
import { Repository } from 'typeorm';
import { File } from './entities/file.entity';
import { ConfigService } from '@nestjs/config';
export declare class FilesService {
    private fileRepository;
    private configService;
    constructor(fileRepository: Repository<File>, configService: ConfigService);
    uploadPublicFile(dataBuffer: Buffer, filename: string, fileType: string): Promise<File>;
    create(data: any): Promise<any>;
    upload(files: any, request: any, response: any): Promise<any[]>;
    findAll(): Promise<File[]>;
    findOne(id: string): Promise<File>;
    update(id: string, updateFileInput: UpdateFileInput): Promise<File>;
    remove(id: string): Promise<File>;
}
