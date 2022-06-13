import { SocialMediaService } from './social-media.service';
import { SocialMedia } from './entities/social-media.entity';
import { CreateSocialMediaInput } from './dto/create-social-media.input';
import { UpdateSocialMediaInput } from './dto/update-social-media.input';
export declare class SocialMediaResolver {
    private readonly socialMediaService;
    constructor(socialMediaService: SocialMediaService);
    createSocialMedia(createSocialMediaInput: CreateSocialMediaInput): Promise<SocialMedia>;
    findAll(): Promise<SocialMedia[]>;
    findOne(id: string): Promise<SocialMedia>;
    updateSocialMedia(updateSocialMediaInput: UpdateSocialMediaInput): Promise<SocialMedia>;
    removeSocialMedia(id: string): Promise<SocialMedia>;
}
