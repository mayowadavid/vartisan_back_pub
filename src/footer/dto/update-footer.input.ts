import { CreateFooterInput } from './create-footer.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFooterInput extends PartialType(CreateFooterInput) {
  @Field()
  id: string;

  @Field({ description: 'footer name', nullable: false })
  name: string;

  @Field({ description: 'footer description' })
  description: string;

  @Field({ description: 'Menu' })
  menu: string;
}
