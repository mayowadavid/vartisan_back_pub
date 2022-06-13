import { Module } from '@nestjs/common';
import { OrderTemplateService } from './order-template.service';
import { OrderTemplateResolver } from './order-template.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderTemplate } from './entities/order-template.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrderTemplate])],
  providers: [OrderTemplateResolver, OrderTemplateService],
})
export class OrderTemplateModule {}
