import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OrderFeedbackService } from './order-feedback.service';
import { OrderFeedback } from './entities/order-feedback.entity';
import { CreateOrderFeedbackInput } from './dto/create-order-feedback.input';
import { UpdateOrderFeedbackInput } from './dto/update-order-feedback.input';

@Resolver(() => OrderFeedback)
export class OrderFeedbackResolver {
  constructor(private readonly orderFeedbackService: OrderFeedbackService) {}

  @Mutation(() => OrderFeedback)
  createOrderFeedback(
    @Args('createOrderFeedbackInput')
    createOrderFeedbackInput: CreateOrderFeedbackInput,
  ) {
    return this.orderFeedbackService.create(createOrderFeedbackInput);
  }

  @Query(() => [OrderFeedback], { name: 'orderFeedback' })
  findAll() {
    return this.orderFeedbackService.findAll();
  }

  @Query(() => OrderFeedback, { name: 'orderFeedback' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.orderFeedbackService.findOne(id);
  }

  @Mutation(() => OrderFeedback)
  updateOrderFeedback(
    @Args('updateOrderFeedbackInput')
    updateOrderFeedbackInput: UpdateOrderFeedbackInput,
  ) {
    return this.orderFeedbackService.update(
      updateOrderFeedbackInput.id,
      updateOrderFeedbackInput,
    );
  }

  @Mutation(() => OrderFeedback)
  removeOrderFeedback(@Args('id', { type: () => Int }) id: number) {
    return this.orderFeedbackService.remove(id);
  }
}
