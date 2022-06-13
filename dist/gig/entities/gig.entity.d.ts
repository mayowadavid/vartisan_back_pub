import { Category } from 'src/categories/entities/category.entity';
import { CommercialUse } from 'src/commercial-use/entities/commercial-use.entity';
import { Favorite } from 'src/favorites/entities/favorite.entity';
import { GigFaq } from 'src/gig-faq/entities/gig-faq.entity';
import { GigRequirement } from 'src/gig-requirement/entities/gig-requirement.entity';
import { GigTag } from 'src/gig-tags/entities/gig-tag.entity';
import { GigVideo } from 'src/gig-video/entities/gig-video.entity';
import { GigGallery } from 'src/gig-gallery/entities/gig-gallery.entity';
import { Gigformat } from 'src/gigformat/entities/gigformat.entity';
import { PrivateCommission } from 'src/private-commission/entities/private-commission.entity';
import { Rating } from 'src/rating/entities/rating.entity';
import { Reference } from 'src/reference/entities/reference.entity';
import { RushOrder } from 'src/rush-order/entities/rush-order.entity';
import { SubCategory } from 'src/sub-category/entities/sub-category.entity';
import { Order } from 'src/order/entities/order.entity';
import { User } from 'src/users/entities/user.entity';
import { Earning } from 'src/earnings/entities/earning.entity';
export declare enum GigStatus {
    DRAFT = "draft",
    PAUSED = "paused",
    ACTIVE = "active"
}
export declare class Gig {
    id: string;
    name: string;
    description: string;
    deliveryPeriod: string;
    numberOfRevision: string;
    sourceFile: boolean;
    commercial: boolean;
    aiFiles: boolean;
    customIllustration: boolean;
    fileId: string;
    showOrder: boolean;
    terms: string;
    amount: string;
    categoryId: string;
    subCategoryId: string;
    status: GigStatus;
    ratingId: string;
    gigFormatId: string;
    favoriteId: string;
    referenceId: string;
    defaultReference: string;
    gigFaqId: string;
    gigTagId: string;
    rushOrderId: string;
    gigGalleryId: string;
    gigVideoId: string;
    privateCommissionId: string;
    commercialUseId: string;
    userId: string;
    createdAt: string;
    earningId: string;
    earning: Earning;
    order: Order[];
    rushOrder: RushOrder;
    commercialUse: CommercialUse;
    privateCommission: PrivateCommission;
    category: Category;
    user: User;
    subCategory: SubCategory;
    referenceGig: Reference[];
    gigTag: GigTag[];
    favorite: Favorite[];
    gigFormat: Gigformat;
    rating: Rating[];
    gigFaq: GigFaq[];
    gigRequirement: GigRequirement[];
    gigGallery: GigGallery[];
    gigVideo: GigVideo[];
}
