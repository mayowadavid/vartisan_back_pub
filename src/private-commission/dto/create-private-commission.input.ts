import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePrivateCommissionInput {
  @Field({ description: 'status', nullable: true })
  status: boolean;

  @Field({ description: 'price', nullable: true })
  price: string;

  @Field({ description: 'deliveryPeriod', nullable: true })
  deliveryPeriod: string;

  @Field({ description: 'gig id', nullable: true })
  gigId: string;
}
