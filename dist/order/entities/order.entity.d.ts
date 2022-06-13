import { OrderFaq } from 'src/order-faq/entities/order-faq.entity';
import { OrderRequirement } from 'src/order-requirement/entities/order-requirement.entity';
import { User } from 'src/users/entities/user.entity';
import { Gig } from 'src/gig/entities/gig.entity';
import { Message } from 'src/messages/entities/message.entity';
export declare enum OrderStatus {
    CANCELLED = "cancelled",
    WITHDRAWN = "withdrawn",
    NOT_ACTIVE = "not_active",
    REVISION = "revision",
    ACTIVE = "active",
    COMPLETED = "completed"
}
export declare class Order {
    id: string;
    name: string;
    quantity: string;
    category: string;
    date: string;
    gigImage: string;
    revision: string;
    approveDate: string;
    vartisan: string;
    orderStatus: OrderStatus;
    amount: string;
    sourceFile: boolean;
    commercial: boolean;
    rushOrder: boolean;
    privateOrder: boolean;
    rushOrderAmount: string;
    rushOrderDelivery: string;
    commercialOrderAmount: string;
    commercialOrderDelivery: string;
    privateOrderAmount: string;
    privateOrderDelivery: string;
    end: string;
    total: string;
    gigId: string;
    orderRequirementId: string;
    sellerId: string;
    clientId: string;
    seller: User;
    client: User;
    gig: Gig;
    message: Message[];
    orderFaq: OrderFaq[];
    orderFaqId: string;
    orderRequirement: OrderRequirement;
}
