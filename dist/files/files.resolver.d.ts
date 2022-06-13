import { FilesService } from './files.service';
import { File } from './entities/file.entity';
import { CreateFileInput } from './dto/create-file.input';
import { UpdateFileInput } from './dto/update-file.input';
export declare class FilesResolver {
    private readonly filesService;
    constructor(filesService: FilesService);
    createFile(createFileInput: CreateFileInput): Promise<any>;
    findAll(): Promise<File[]>;
    findOne(id: string): Promise<File>;
    updateFile(updateFileInput: UpdateFileInput): Promise<File>;
    removeFile(id: string): Promise<File>;
}
