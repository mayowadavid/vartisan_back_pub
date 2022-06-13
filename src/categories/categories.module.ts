import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesResolver } from './categories.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { CategoriesController } from './categories.controller';
import { File } from 'src/files/entities/file.entity';
import { FilesService } from 'src/files/files.service';
import { SubCategory } from 'src/sub-category/entities/sub-category.entity';
import { SubCategoryService } from 'src/sub-category/sub-category.service';

@Module({
  imports: [TypeOrmModule.forFeature([Category, File, SubCategory])],
  providers: [
    CategoriesResolver,
    CategoriesService,
    FilesService,
    SubCategoryService,
  ],
  controllers: [CategoriesController],
})
export class CategoriesModule {}
