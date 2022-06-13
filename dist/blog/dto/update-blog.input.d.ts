import { CreateBlogInput } from './create-blog.input';
import { BlogStatus } from '../entities/blog.entity';
declare const UpdateBlogInput_base: import("@nestjs/common").Type<Partial<CreateBlogInput>>;
export declare class UpdateBlogInput extends UpdateBlogInput_base {
    id: string;
    name: string;
    createdAt: string;
    description: string;
    descriptionMarkDown: string;
    status: BlogStatus;
    slug: string;
    categoryId: string;
    fileId: string;
    commentId: string;
    userId: string;
}
export {};
