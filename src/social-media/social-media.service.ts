import { Injectable } from '@nestjs/common';
import { CreateSocialMediaInput } from './dto/create-social-media.input';
import { UpdateSocialMediaInput } from './dto/update-social-media.input';
import { SocialMedia } from './entities/social-media.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SocialMediaService {
  constructor(
    @InjectRepository(SocialMedia)
    private socialMediaRepository: Repository<SocialMedia>,
  ) {}
  create(createSocialMediaInput: CreateSocialMediaInput): Promise<SocialMedia> {
    const socialMedia = this.socialMediaRepository.create(
      createSocialMediaInput,
    );
    return this.socialMediaRepository.save(socialMedia);
  }

  findAll(): Promise<SocialMedia[]> {
    return this.socialMediaRepository.find();
  }

  findOne(id: string): Promise<SocialMedia> {
    return this.socialMediaRepository.findOne(id);
  }

  update(
    id: string,
    updateSocialMediaInput: UpdateSocialMediaInput,
  ): Promise<SocialMedia> {
    const socialMedia: SocialMedia = this.socialMediaRepository.create(
      updateSocialMediaInput,
    );
    socialMedia.id = id;
    return this.socialMediaRepository.save(socialMedia);
  }

  async remove(id: string): Promise<SocialMedia> {
    const deleteSocialMedia = await this.socialMediaRepository.findOne(id);
    await this.socialMediaRepository.remove(deleteSocialMedia);
    return deleteSocialMedia;
  }
}
