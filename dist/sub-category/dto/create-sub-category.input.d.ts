import { categoryStatus } from 'src/sub-category/entities/sub-category.entity';
export declare class CreateSubCategoryInput {
    name: string;
    description: string;
    status: categoryStatus;
    gigId: string;
    categoryId: string;
}
