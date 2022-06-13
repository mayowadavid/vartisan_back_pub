import { Module } from '@nestjs/common';
import { FooterService } from './footer.service';
import { FooterResolver } from './footer.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Footer } from './entities/footer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Footer])],
  providers: [FooterResolver, FooterService],
})
export class FooterModule {}
