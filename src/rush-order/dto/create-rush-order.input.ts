import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateRushOrderInput {
  @Field({ description: 'status', nullable: true })
  status: boolean;

  @Field({ description: 'price', nullable: true })
  price: string;

  @Field({ description: 'deliveryPeriod', nullable: true })
  deliveryPeriod: string;

  @Field({ description: 'gig id', nullable: true })
  gigId: string;
}
