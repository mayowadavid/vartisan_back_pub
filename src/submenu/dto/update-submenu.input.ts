import { CreateSubmenuInput } from './create-submenu.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSubmenuInput extends PartialType(CreateSubmenuInput) {
  @Field()
  id: string;

  @Field({ description: 'menu name', nullable: false })
  name: string;

  @Field({ description: 'menu url', nullable: false })
  menuUrl: string;

  @Field({ description: 'menu id', nullable: false })
  menuId: string;
}
