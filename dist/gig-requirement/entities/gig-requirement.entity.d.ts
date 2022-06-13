import { Gig } from 'src/gig/entities/gig.entity';
export declare class GigRequirement {
    id: string;
    requirementName: string;
    date: string;
    required: boolean;
    text: boolean;
    link: boolean;
    gigId: string;
    gig: Gig;
}
