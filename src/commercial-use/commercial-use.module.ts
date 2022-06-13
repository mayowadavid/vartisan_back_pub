import { Module } from '@nestjs/common';
import { CommercialUseService } from './commercial-use.service';
import { CommercialUseResolver } from './commercial-use.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommercialUse } from './entities/commercial-use.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CommercialUse])],
  providers: [CommercialUseResolver, CommercialUseService],
})
export class CommercialUseModule {}
