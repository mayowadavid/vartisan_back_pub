import { Module } from '@nestjs/common';
import { SubCategoryService } from './sub-category.service';
import { SubCategoryResolver } from './sub-category.resolver';
import { Category } from 'src/categories/entities/category.entity';
import { SubCategory } from './entities/sub-category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Category, SubCategory])],
  providers: [SubCategoryResolver, SubCategoryService],
})
export class SubCategoryModule {}
