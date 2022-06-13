import { Module } from '@nestjs/common';
import { HomeFaqService } from './home-faq.service';
import { HomeFaqResolver } from './home-faq.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HomeFaq } from './entities/home-faq.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HomeFaq])],
  providers: [HomeFaqResolver, HomeFaqService],
})
export class HomeFaqModule {}
