import { OrderStatus } from '../entities/order.entity';
export declare class CreateOrderInput {
    name: string;
    quantity: string;
    category: string;
    date: string;
    gigImage: string;
    revision: string;
    approveDate: string;
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
    orderFaqId: string;
    orderRequirementId: string;
    gigId: string;
    sellerId: string;
    clientId: string;
}
