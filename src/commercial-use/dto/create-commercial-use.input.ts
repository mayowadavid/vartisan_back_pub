import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateCommercialUseInput {
  @Field({ description: 'status', nullable: true })
  status: boolean;

  @Field({ description: 'price', nullable: true })
  price: string;

  @Field({ description: 'deliveryPeriod', nullable: true })
  deliveryPeriod: string;

  @Field({ description: 'gigId', nullable: true })
  gigId: string;
}
