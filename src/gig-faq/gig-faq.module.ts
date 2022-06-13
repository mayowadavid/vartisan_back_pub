import { Module } from '@nestjs/common';
import { GigFaqService } from './gig-faq.service';
import { GigFaqResolver } from './gig-faq.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GigFaq } from './entities/gig-faq.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GigFaq])],
  providers: [GigFaqResolver, GigFaqService],
})
export class GigFaqModule {}
