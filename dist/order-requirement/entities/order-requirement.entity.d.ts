import { Order } from 'src/order/entities/order.entity';
import { File } from 'src/files/entities/file.entity';
export declare class OrderRequirement {
    id: string;
    description: string;
    date: string;
    reference: string;
    color: string;
    orderId: string;
    descriptionFile: File;
    referenceFile: File;
    colorFile: File;
    order: Order;
}
