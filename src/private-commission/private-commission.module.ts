import { Module } from '@nestjs/common';
import { PrivateCommissionService } from './private-commission.service';
import { PrivateCommissionResolver } from './private-commission.resolver';
import { PrivateCommission } from './entities/private-commission.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PrivateCommission])],
  providers: [PrivateCommissionResolver, PrivateCommissionService],
  exports: [PrivateCommissionService],
})
export class PrivateCommissionModule {}
