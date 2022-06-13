import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RushOrderService } from './rush-order.service';
import { RushOrder } from './entities/rush-order.entity';
import { CreateRushOrderInput } from './dto/create-rush-order.input';
import { UpdateRushOrderInput } from './dto/update-rush-order.input';

@Resolver(() => RushOrder)
export class RushOrderResolver {
  constructor(private readonly rushOrderService: RushOrderService) {}

  @Mutation(() => RushOrder)
  createRushOrder(
    @Args('createRushOrderInput') createRushOrderInput: CreateRushOrderInput,
  ) {
    return this.rushOrderService.create(createRushOrderInput);
  }

  @Query(() => [RushOrder], { name: 'rushOrder' })
  findAll() {
    return this.rushOrderService.findAll();
  }

  @Query(() => RushOrder, { name: 'rushOrder' })
  findOne(@Args('id') id: string) {
    return this.rushOrderService.findOne(id);
  }

  @Mutation(() => RushOrder)
  updateRushOrder(
    @Args('updateRushOrderInput') updateRushOrderInput: UpdateRushOrderInput,
  ) {
    return this.rushOrderService.update(
      updateRushOrderInput.id,
      updateRushOrderInput,
    );
  }

  @Mutation(() => RushOrder)
  removeRushOrder(@Args('id') id: string) {
    return this.rushOrderService.remove(id);
  }
}
