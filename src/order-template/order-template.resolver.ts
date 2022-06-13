import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OrderTemplateService } from './order-template.service';
import { OrderTemplate } from './entities/order-template.entity';
import { CreateOrderTemplateInput } from './dto/create-order-template.input';
import { UpdateOrderTemplateInput } from './dto/update-order-template.input';

@Resolver(() => OrderTemplate)
export class OrderTemplateResolver {
  constructor(private readonly orderTemplateService: OrderTemplateService) {}

  @Mutation(() => OrderTemplate)
  createOrderTemplate(
    @Args('createOrderTemplateInput')
    createOrderTemplateInput: CreateOrderTemplateInput,
  ) {
    return this.orderTemplateService.create(createOrderTemplateInput);
  }

  @Query(() => [OrderTemplate], { name: 'orderTemplate' })
  findAll() {
    return this.orderTemplateService.findAll();
  }

  @Query(() => OrderTemplate, { name: 'orderTemplate' })
  findOne(@Args('id') id: string) {
    return this.orderTemplateService.findOne(id);
  }

  @Mutation(() => OrderTemplate)
  updateOrderTemplate(
    @Args('updateOrderTemplateInput')
    updateOrderTemplateInput: UpdateOrderTemplateInput,
  ) {
    return this.orderTemplateService.update(
      updateOrderTemplateInput.id,
      updateOrderTemplateInput,
    );
  }

  @Mutation(() => OrderTemplate)
  removeOrderTemplate(@Args('id') id: string) {
    return this.orderTemplateService.remove(id);
  }
}
