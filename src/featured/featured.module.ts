import { Module } from '@nestjs/common';
import { FeaturedService } from './featured.service';
import { FeaturedResolver } from './featured.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Featured } from './entities/featured.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Featured])],
  providers: [FeaturedResolver, FeaturedService],
})
export class FeaturedModule {}
