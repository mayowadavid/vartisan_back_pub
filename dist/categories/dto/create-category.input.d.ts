import { categoryStatus } from 'src/categories/entities/category.entity';
export declare class CreateCategoryInput {
    name: string;
    description: string;
    status: categoryStatus;
    displayBanner: boolean;
    subCategoryId: string;
    gigId: string;
    blogId: string;
}
