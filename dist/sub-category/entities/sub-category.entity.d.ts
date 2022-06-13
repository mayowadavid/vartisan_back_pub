import { Category } from 'src/categories/entities/category.entity';
import { Gig } from 'src/gig/entities/gig.entity';
export declare enum categoryStatus {
    DRAFT = "draft",
    PAUSED = "paused",
    ACTIVE = "active"
}
export declare class SubCategory {
    id: string;
    name: string;
    description: string;
    status: categoryStatus;
    categoryId: string;
    gigId: string;
    category: Category;
    gig: Gig[];
}
