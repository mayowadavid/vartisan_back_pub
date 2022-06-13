import { GigGalleryService } from './gig-gallery.service';
import { GigGallery } from './entities/gig-gallery.entity';
import { CreateGigGalleryInput } from './dto/create-gig-gallery.input';
import { UpdateGigGalleryInput } from './dto/update-gig-gallery.input';
export declare class GigGalleryResolver {
    private readonly gigGalleryService;
    constructor(gigGalleryService: GigGalleryService);
    createGigGallery(createGigGalleryInput: CreateGigGalleryInput): Promise<GigGallery>;
    findAll(): Promise<GigGallery[]>;
    findOne(id: string): Promise<GigGallery>;
    updateGigGallery(updateGigGalleryInput: UpdateGigGalleryInput): Promise<any>;
    removeGigGallery(id: string): Promise<GigGallery>;
}
