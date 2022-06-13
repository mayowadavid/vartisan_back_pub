import { CreateGigVideoInput } from './dto/create-gig-video.input';
import { UpdateGigVideoInput } from './dto/update-gig-video.input';
import { Repository } from 'typeorm';
import { GigVideo } from './entities/gig-video.entity';
import { FilesService } from 'src/files/files.service';
export declare class GigVideoService {
    private gigVideoRepository;
    private fileService;
    constructor(gigVideoRepository: Repository<GigVideo>, fileService: FilesService);
    create(createGigVideoInput: CreateGigVideoInput): Promise<GigVideo>;
    findAll(): Promise<GigVideo[]>;
    findOne(id: string): Promise<GigVideo>;
    upload(files: any, request: any, response: any): Promise<any[]>;
    update(id: string, updateGigVideoInput: UpdateGigVideoInput): Promise<any>;
    remove(id: string): Promise<GigVideo>;
}
