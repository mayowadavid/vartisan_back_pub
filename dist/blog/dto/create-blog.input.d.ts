import { BlogStatus } from '../entities/blog.entity';
export declare class CreateBlogInput {
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
