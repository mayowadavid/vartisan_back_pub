import { Gig } from 'src/gig/entities/gig.entity';
export declare class Rating {
    id: string;
    thumbsUp: string;
    thumbsDown: string;
    reviews: string;
    gig: Gig[];
    gigId: string;
}
