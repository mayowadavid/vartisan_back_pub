import { OrderFeedbackService } from './order-feedback.service';
import { CreateOrderFeedbackInput } from './dto/create-order-feedback.input';
import { UpdateOrderFeedbackInput } from './dto/update-order-feedback.input';
export declare class OrderFeedbackResolver {
    private readonly orderFeedbackService;
    constructor(orderFeedbackService: OrderFeedbackService);
    createOrderFeedback(createOrderFeedbackInput: CreateOrderFeedbackInput): string;
    findAll(): string;
    findOne(id: number): string;
    updateOrderFeedback(updateOrderFeedbackInput: UpdateOrderFeedbackInput): string;
    removeOrderFeedback(id: number): string;
}
