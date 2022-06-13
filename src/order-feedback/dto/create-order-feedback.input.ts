import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateOrderFeedbackInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
