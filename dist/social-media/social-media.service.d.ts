import { CreateSocialMediaInput } from './dto/create-social-media.input';
import { UpdateSocialMediaInput } from './dto/update-social-media.input';
import { SocialMedia } from './entities/social-media.entity';
import { Repository } from 'typeorm';
export declare class SocialMediaService {
    private socialMediaRepository;
    constructor(socialMediaRepository: Repository<SocialMedia>);
    create(createSocialMediaInput: CreateSocialMediaInput): Promise<SocialMedia>;
    findAll(): Promise<SocialMedia[]>;
    findOne(id: string): Promise<SocialMedia>;
    update(id: string, updateSocialMediaInput: UpdateSocialMediaInput): Promise<SocialMedia>;
    remove(id: string): Promise<SocialMedia>;
}
