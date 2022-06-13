import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateOrderRequirementInput {
  @Field({ description: 'order description', nullable: true })
  description: string;

  @Field({ description: 'requirement creation date', nullable: true })
  date: string;

  @Field({ description: 'order reference', nullable: true })
  reference: string;

  @Field({ description: 'order color', nullable: true })
  color: string;

  @Field({ description: 'order requirement id', nullable: true })
  orderId: string;
}
