import { CreateCommercialUseInput } from './create-commercial-use.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCommercialUseInput extends PartialType(
  CreateCommercialUseInput,
) {
  @Field()
  id: string;

  @Field({ description: 'status', nullable: true })
  status: boolean;

  @Field({ description: 'price', nullable: true })
  price: string;

  @Field({ description: 'deliveryPeriod', nullable: true })
  deliveryPeriod: string;

  @Field({ description: 'gigId', nullable: true })
  gigId: string;
}
