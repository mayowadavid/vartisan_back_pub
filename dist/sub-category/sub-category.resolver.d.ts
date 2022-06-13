import { SubCategoryService } from './sub-category.service';
import { SubCategory } from './entities/sub-category.entity';
import { CreateSubCategoryInput } from './dto/create-sub-category.input';
import { UpdateSubCategoryInput } from './dto/update-sub-category.input';
export declare class SubCategoryResolver {
    private readonly subCategoryService;
    constructor(subCategoryService: SubCategoryService);
    createSubCategory(createSubCategoryInput: CreateSubCategoryInput): Promise<SubCategory>;
    findAll(): Promise<SubCategory[]>;
    findOne(id: string): Promise<SubCategory>;
    updateSubCategory(updateSubCategoryInput: UpdateSubCategoryInput): Promise<SubCategory>;
    removeSubCategory(id: string): Promise<SubCategory>;
}
