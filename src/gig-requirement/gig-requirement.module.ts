import { Module } from '@nestjs/common';
import { GigRequirementService } from './gig-requirement.service';
import { GigRequirementResolver } from './gig-requirement.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GigRequirement } from './entities/gig-requirement.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GigRequirement])],
  providers: [GigRequirementResolver, GigRequirementService],
})
export class GigRequirementModule {}
