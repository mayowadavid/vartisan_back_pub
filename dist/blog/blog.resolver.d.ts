import { BlogService } from './blog.service';
import { Blog } from './entities/blog.entity';
import { CreateBlogInput } from './dto/create-blog.input';
import { UpdateBlogInput } from './dto/update-blog.input';
export declare class BlogResolver {
    private readonly blogService;
    constructor(blogService: BlogService);
    createBlog(user: any, createBlogInput: CreateBlogInput): Promise<Blog>;
    findAll(): Promise<Blog[]>;
    findBlogByUser(user: any): Promise<Blog[]>;
    findOne(id: string): Promise<Blog>;
    updateBlog(updateBlogInput: UpdateBlogInput): Promise<Blog>;
    removeBlog(id: string): Promise<{
        id: string;
        name: string;
        createdAt: string;
        description: string;
        descriptionMarkDown: string;
        status: import("./entities/blog.entity").BlogStatus;
        slug: string;
        categoryId: string;
        fileId: string;
        commentId: string;
        userId: string;
        user: import("../users/entities/user.entity").User;
        category: import("../categories/entities/category.entity").Category[];
        file: import("../files/entities/file.entity").File;
        comments: import("../comments/entities/comment.entity").Comment[];
    }>;
}
