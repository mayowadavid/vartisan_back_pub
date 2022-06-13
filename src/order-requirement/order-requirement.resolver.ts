import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OrderRequirementService } from './order-requirement.service';
import { OrderRequirement } from './entities/order-requirement.entity';
import { CreateOrderRequirementInput } from './dto/create-order-requirement.input';
import { UpdateOrderRequirementInput } from './dto/update-order-requirement.input';

@Resolver(() => OrderRequirement)
export class OrderRequirementResolver {
  constructor(
    private readonly orderRequirementService: OrderRequirementService,
  ) {}

  @Mutation(() => OrderRequirement)
  createOrderRequirement(
    @Args('createOrderRequirementInput')
    createOrderRequirementInput: CreateOrderRequirementInput,
  ) {
    return this.orderRequirementService.create(createOrderRequirementInput);
  }

  @Query(() => [OrderRequirement], { name: 'orderRequirement' })
  findAll() {
    return this.orderRequirementService.findAll();
  }

  @Query(() => OrderRequirement, { name: 'orderRequirement' })
  findOne(@Args('id') id: string) {
    return this.orderRequirementService.findOne(id);
  }

  @Mutation(() => OrderRequirement)
  updateOrderRequirement(
    @Args('updateOrderRequirementInput')
    updateOrderRequirementInput: UpdateOrderRequirementInput,
  ) {
    return this.orderRequirementService.update(
      updateOrderRequirementInput.id,
      updateOrderRequirementInput,
    );
  }

  @Mutation(() => OrderRequirement)
  removeOrderRequirement(@Args('id') id: string) {
    return this.orderRequirementService.remove(id);
  }
}
