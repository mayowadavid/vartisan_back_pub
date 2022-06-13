import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { OrderService } from './order.service';
import { Order } from './entities/order.entity';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
import { GqlAuthGuard } from 'src/users/gql-users.guard';
import { UseGuards } from '@nestjs/common';
import { CurrentUser } from 'src/users/current-user';

@Resolver(() => Order)
export class OrderResolver {
  constructor(private readonly orderService: OrderService) {}

  @Mutation(() => Order)
  @UseGuards(GqlAuthGuard)
  createOrder(
    @CurrentUser()
    user,
    @Args('createOrderInput') createOrderInput: CreateOrderInput,
  ) {
    return this.orderService.create(user, createOrderInput);
  }

  @Query(() => [Order], { name: 'findAllOrders' })
  findAll() {
    return this.orderService.findAll();
  }

  @Query(() => Order, { name: 'order' })
  findOne(@Args('id') id: string) {
    return this.orderService.findOne(id);
  }

  @Query(() => [Order], { name: 'findClientOrder' })
  @UseGuards(GqlAuthGuard)
  findClientOrder(
    @CurrentUser()
    user,
  ) {
    return this.orderService.findClientOrder(user);
  }

  @Query(() => [Order], { name: 'findSellerOrder' })
  @UseGuards(GqlAuthGuard)
  findSellerOrder(
    @CurrentUser()
    user,
  ) {
    return this.orderService.findSellerOrder(user);
  }

  @Mutation(() => Order)
  @UseGuards(GqlAuthGuard)
  updateOrder(
    @CurrentUser()
    user,
    @Args('updateOrderInput') updateOrderInput: UpdateOrderInput,
  ) {
    return this.orderService.update(
      user,
      updateOrderInput.id,
      updateOrderInput,
    );
  }

  @Mutation(() => Order)
  removeOrder(@Args('id') id: string) {
    return this.orderService.remove(id);
  }
}
