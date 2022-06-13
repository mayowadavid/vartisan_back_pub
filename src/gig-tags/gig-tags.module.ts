import { Module } from '@nestjs/common';
import { GigTagsService } from './gig-tags.service';
import { GigTagsResolver } from './gig-tags.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GigTag } from './entities/gig-tag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GigTag])],
  providers: [GigTagsResolver, GigTagsService],
})
export class GigTagsModule {}
