import { CreateBannerInput } from './dto/create-banner.input';
import { UpdateBannerInput } from './dto/update-banner.input';
import { Banner } from './entities/banner.entity';
import { Repository } from 'typeorm';
import { FilesService } from 'src/files/files.service';
export declare class BannerService {
    private bannerRepository;
    private fileService;
    constructor(bannerRepository: Repository<Banner>, fileService: FilesService);
    create(createBannerInput: CreateBannerInput): Promise<Banner>;
    findAll(): Promise<Banner[]>;
    findOne(id: string): Promise<Banner>;
    update(id: string, updateBannerInput: UpdateBannerInput): Promise<Banner>;
    upload(files: any, request: any, response: any): Promise<any[]>;
    remove(id: string): Promise<Banner>;
}
