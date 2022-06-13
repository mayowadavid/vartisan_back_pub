import { CreateOrderFeedbackInput } from './dto/create-order-feedback.input';
import { UpdateOrderFeedbackInput } from './dto/update-order-feedback.input';
export declare class OrderFeedbackService {
    create(createOrderFeedbackInput: CreateOrderFeedbackInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateOrderFeedbackInput: UpdateOrderFeedbackInput): string;
    remove(id: number): string;
}
