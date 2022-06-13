import { CreateRushOrderInput } from './create-rush-order.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateRushOrderInput extends PartialType(CreateRushOrderInput) {
  @Field()
  id: string;

  @Field({ description: 'status', nullable: true })
  status: boolean;

  @Field({ description: 'price', nullable: true })
  price: string;

  @Field({ description: 'deliveryPeriod', nullable: true })
  deliveryPeriod: string;

  @Field({ description: 'gig id', nullable: true })
  gigId: string;
}
