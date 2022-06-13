import { Blog } from 'src/blog/entities/blog.entity';
import { File } from 'src/files/entities/file.entity';
import { Gig } from 'src/gig/entities/gig.entity';
export declare enum categoryStatus {
    DRAFT = "draft",
    PAUSED = "paused",
    ACTIVE = "active"
}
export declare class Category {
    id: string;
    name: string;
    description: string;
    status: categoryStatus;
    displayBanner: boolean;
    subCategoryId: string;
    gigId: string;
    blogId: string;
    blog: Blog;
    file: File;
    gig: Gig[];
    subCategory: Category[];
}
