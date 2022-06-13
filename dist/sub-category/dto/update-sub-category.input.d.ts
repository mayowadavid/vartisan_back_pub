import { CreateSubCategoryInput } from './create-sub-category.input';
import { categoryStatus } from 'src/sub-category/entities/sub-category.entity';
declare const UpdateSubCategoryInput_base: import("@nestjs/common").Type<Partial<CreateSubCategoryInput>>;
export declare class UpdateSubCategoryInput extends UpdateSubCategoryInput_base {
    id: string;
    name: string;
    description: string;
    status: categoryStatus;
    gigId: string;
    categoryId: string;
}
export {};
