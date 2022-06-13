import { Module } from '@nestjs/common';
import { RushOrderService } from './rush-order.service';
import { RushOrderResolver } from './rush-order.resolver';
import { RushOrder } from './entities/rush-order.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([RushOrder])],
  providers: [RushOrderResolver, RushOrderService],
})
export class RushOrderModule {}
