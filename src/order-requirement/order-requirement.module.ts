import { Module } from '@nestjs/common';
import { OrderRequirementService } from './order-requirement.service';
import { OrderRequirementResolver } from './order-requirement.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderRequirement } from './entities/order-requirement.entity';
import { OrderRequirementController } from './order-requirement.controller';
import { FilesService } from 'src/files/files.service';
import { File } from 'src/files/entities/file.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrderRequirement, File])],
  providers: [OrderRequirementResolver, OrderRequirementService, FilesService],
  controllers: [OrderRequirementController],
})
export class OrderRequirementModule {}
