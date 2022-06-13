import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateOrderTemplateInput {
  @Field()
  id: string;

  @Field({ description: 'user message' })
  user: string;

  @Field({ description: 'date' })
  date: string;

  @Field({ description: 'revision' })
  revision: string;

  @Field({ description: 'order status' })
  orderStatus: string;

  @Field({ description: 'order amount' })
  amount: string;

  @Field({ description: 'order count' })
  orderCount: string;

  @Field({ description: 'order source file' })
  sourceFile: boolean;

  @Field({ description: 'commercial order' })
  commercial: boolean;

  @Field({ description: 'rush order' })
  rushOrder: boolean;

  @Field({ description: 'order end' })
  end: string;
}
