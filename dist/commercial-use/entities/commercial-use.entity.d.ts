import { Gig } from 'src/gig/entities/gig.entity';
export declare class CommercialUse {
    id: string;
    status: boolean;
    price: string;
    deliveryPeriod: string;
    gigId: string;
    gig: Gig;
}
