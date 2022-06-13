import { BannerService } from './banner.service';
import { Banner } from './entities/banner.entity';
import { CreateBannerInput } from './dto/create-banner.input';
import { UpdateBannerInput } from './dto/update-banner.input';
export declare class BannerResolver {
    private readonly bannerService;
    constructor(bannerService: BannerService);
    createBanner(createBannerInput: CreateBannerInput): Promise<Banner>;
    findAll(): Promise<Banner[]>;
    findOne(id: string): Promise<Banner>;
    updateBanner(updateBannerInput: UpdateBannerInput): Promise<Banner>;
    removeBanner(id: string): Promise<Banner>;
}
