import { Injectable } from '@nestjs/common';
import { CreateSubCategoryInput } from './dto/create-sub-category.input';
import { UpdateSubCategoryInput } from './dto/update-sub-category.input';
import { SubCategory } from './entities/sub-category.entity';
import { Category } from 'src/categories/entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SubCategoryService {
  constructor(
    @InjectRepository(SubCategory)
    private subCategoryRepository: Repository<SubCategory>,
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async create(
    createSubCategoryInput: CreateSubCategoryInput,
  ): Promise<SubCategory> {
    const subCategory = this.subCategoryRepository.create(
      createSubCategoryInput,
    );
    return this.subCategoryRepository.save(subCategory);
  }

  findAll(): Promise<SubCategory[]> {
    return this.subCategoryRepository.find({
      relations: ['category'],
    });
  }

  findOne(id: string): Promise<SubCategory> {
    return this.subCategoryRepository.findOne(id, {
      relations: ['subCategory'],
    });
  }

  update(
    id: string,
    updateSubCategoryInput: UpdateSubCategoryInput,
  ): Promise<SubCategory> {
    const subCategory: SubCategory = this.subCategoryRepository.create(
      updateSubCategoryInput,
    );
    subCategory.id = id;
    return this.subCategoryRepository.save(subCategory);
  }

  async remove(id: string): Promise<SubCategory> {
    const deleteCategory = await this.subCategoryRepository.findOne(id);
    return deleteCategory;
  }
}
