import { Gig } from 'src/gig/entities/gig.entity';
import { User } from 'src/users/entities/user.entity';
export declare class Favorite {
    id: string;
    gigs: string;
    gigId: string;
    userId: string;
    gig: Gig;
    user: User;
}
