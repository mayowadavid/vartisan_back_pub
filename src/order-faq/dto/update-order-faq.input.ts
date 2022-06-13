import { CreateOrderFaqInput } from './create-order-faq.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateOrderFaqInput extends PartialType(CreateOrderFaqInput) {
  @Field()
  id: string;

  @Field({ description: 'faq name' })
  name: string;

  @Field({ description: 'faq status' })
  status: string;

  @Field({ description: 'faq description' })
  description: string;

  @Field({ description: 'order Id' })
  orderId: string;
}
