import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OrderFaqService } from './order-faq.service';
import { OrderFaq } from './entities/order-faq.entity';
import { CreateOrderFaqInput } from './dto/create-order-faq.input';
import { UpdateOrderFaqInput } from './dto/update-order-faq.input';

@Resolver(() => OrderFaq)
export class OrderFaqResolver {
  constructor(private readonly orderFaqService: OrderFaqService) {}

  @Mutation(() => OrderFaq)
  createOrderFaq(
    @Args('createOrderFaqInput') createOrderFaqInput: CreateOrderFaqInput,
  ) {
    return this.orderFaqService.create(createOrderFaqInput);
  }

  @Query(() => [OrderFaq], { name: 'orderFaq' })
  findAll() {
    return this.orderFaqService.findAll();
  }

  @Query(() => OrderFaq, { name: 'orderFaq' })
  findOne(@Args('id') id: string) {
    return this.orderFaqService.findOne(id);
  }

  @Mutation(() => OrderFaq)
  updateOrderFaq(
    @Args('updateOrderFaqInput') updateOrderFaqInput: UpdateOrderFaqInput,
  ) {
    return this.orderFaqService.update(
      updateOrderFaqInput.id,
      updateOrderFaqInput,
    );
  }

  @Mutation(() => OrderFaq)
  removeOrderFaq(@Args('id') id: string) {
    return this.orderFaqService.remove(id);
  }
}
