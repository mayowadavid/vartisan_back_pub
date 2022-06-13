import { CreateOrderFeedbackInput } from './create-order-feedback.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateOrderFeedbackInput extends PartialType(
  CreateOrderFeedbackInput,
) {
  @Field(() => Int)
  id: number;
}
