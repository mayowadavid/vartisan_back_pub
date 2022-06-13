import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateOrderFaqInput {
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
