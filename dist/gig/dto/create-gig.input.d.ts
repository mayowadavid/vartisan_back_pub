import { GigStatus } from '../entities/gig.entity';
export declare class UserGigInput {
    name: string;
    userName: string;
}
export declare class CreateGigInput {
    name: string;
    description: string;
    deliveryPeriod: string;
    numberOfRevision: string;
    sourceFile: boolean;
    commercial: boolean;
    aiFiles: boolean;
    customIllustration: boolean;
    galleryVideoId: string;
    galleryImageId: string;
    fileId: string;
    showOrder: boolean;
    terms: string;
    amount: string;
    categoryId: string;
    subCategoryId: string;
    status: GigStatus;
    ratingId: string;
    gigFormatId: string;
    gigTagId: string;
    rushOrderId: string;
    privateCommissionId: string;
    commercialUseId: string;
    userId: string;
    createdAt: string;
    favoriteId: string;
    referenceId: string;
    defaultReference: string;
    gigFaqId: string;
    gigVideoId: string;
    gigGalleryId: string;
    earningId: string;
}
