import { CreateMenuInput } from './create-menu.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMenuInput extends PartialType(CreateMenuInput) {
  @Field()
  id: string;

  @Field({ description: 'menu name', nullable: false })
  name: string;

  @Field({ description: 'menu url', nullable: false })
  menuUrl: string;

  @Field({ description: 'header id', nullable: false })
  headerId: string;

  @Field({ description: 'subMenu id', nullable: false })
  subMenuId: string;
}
