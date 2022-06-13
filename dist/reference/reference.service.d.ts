import { CreateReferenceInput } from './dto/create-reference.input';
import { UpdateReferenceInput } from './dto/update-reference.input';
import { Repository } from 'typeorm';
import { Reference } from './entities/reference.entity';
import { FilesService } from 'src/files/files.service';
export declare class ReferenceService {
    private referenceRepository;
    private fileService;
    constructor(referenceRepository: Repository<Reference>, fileService: FilesService);
    create(createReferenceInput: CreateReferenceInput): Promise<Reference>;
    findAll(): Promise<Reference[]>;
    findOne(id: string): Promise<Reference>;
    findReferenceByUser(user: any): Promise<Reference[]>;
    update(id: string, updateReferenceInput: UpdateReferenceInput): Promise<Reference>;
    upload(files: any, request: any, user: any, response: any): Promise<any[]>;
    remove(id: string): Promise<Reference>;
}
