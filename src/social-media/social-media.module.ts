import { Module } from '@nestjs/common';
import { SocialMediaService } from './social-media.service';
import { SocialMediaResolver } from './social-media.resolver';
import { SocialMedia } from './entities/social-media.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SocialMedia])],
  providers: [SocialMediaResolver, SocialMediaService],
})
export class SocialMediaModule {}
