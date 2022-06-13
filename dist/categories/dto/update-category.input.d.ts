import { CreateCategoryInput } from './create-category.input';
import { categoryStatus } from 'src/sub-category/entities/sub-category.entity';
declare const UpdateCategoryInput_base: import("@nestjs/common").Type<Partial<CreateCategoryInput>>;
export declare class UpdateCategoryInput extends UpdateCategoryInput_base {
    id: string;
    name: string;
    description: string;
    status: categoryStatus;
    displayBanner: boolean;
    subCategoryId: string;
    gigId: string;
    blogId: string;
}
export {};
