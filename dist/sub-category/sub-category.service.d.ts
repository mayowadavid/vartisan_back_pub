import { CreateSubCategoryInput } from './dto/create-sub-category.input';
import { UpdateSubCategoryInput } from './dto/update-sub-category.input';
import { SubCategory } from './entities/sub-category.entity';
import { Category } from 'src/categories/entities/category.entity';
import { Repository } from 'typeorm';
export declare class SubCategoryService {
    private subCategoryRepository;
    private categoryRepository;
    constructor(subCategoryRepository: Repository<SubCategory>, categoryRepository: Repository<Category>);
    create(createSubCategoryInput: CreateSubCategoryInput): Promise<SubCategory>;
    findAll(): Promise<SubCategory[]>;
    findOne(id: string): Promise<SubCategory>;
    update(id: string, updateSubCategoryInput: UpdateSubCategoryInput): Promise<SubCategory>;
    remove(id: string): Promise<SubCategory>;
}
