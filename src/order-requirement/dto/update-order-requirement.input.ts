import { CreateOrderRequirementInput } from './create-order-requirement.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateOrderRequirementInput extends PartialType(
  CreateOrderRequirementInput,
) {
  @Field()
  id: string;

  @Field({ description: 'order description', nullable: true })
  description: string;

  @Field({ description: 'requirement creation date', nullable: true })
  date: string;

  @Field({ description: 'order reference', nullable: true })
  reference: string;

  @Field({ description: 'order color', nullable: true })
  color: string;

  @Field({ description: 'order requirement', nullable: true })
  orderId: string;
}
