import { CreateGigGalleryInput } from './dto/create-gig-gallery.input';
import { UpdateGigGalleryInput } from './dto/update-gig-gallery.input';
import { Repository } from 'typeorm';
import { GigGallery } from './entities/gig-gallery.entity';
import { FilesService } from 'src/files/files.service';
export declare class GigGalleryService {
    private gigGalleryRepository;
    private fileService;
    constructor(gigGalleryRepository: Repository<GigGallery>, fileService: FilesService);
    create(createGigGalleryInput: CreateGigGalleryInput): Promise<GigGallery>;
    findAll(): Promise<GigGallery[]>;
    findOne(id: string): Promise<GigGallery>;
    upload(files: any, request: any, response: any): Promise<any[]>;
    update(id: string, updateGigGalleryInput: UpdateGigGalleryInput): Promise<any>;
    remove(id: string): Promise<GigGallery>;
}
