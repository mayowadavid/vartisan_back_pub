import { CreateReferenceInput } from './create-reference.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateReferenceInput extends PartialType(CreateReferenceInput) {
  @Field()
  id: string;

  @Field({ description: 'reference name', nullable: true })
  name: string;

  @Field({ description: 'reference default', nullable: true })
  selected: boolean;

  @Field({ description: 'reference description', nullable: true })
  description: string;

  @Field({ description: 'reference id', nullable: true })
  fileId: string;

  @Field({ description: 'gig reference id', nullable: true })
  gigReferenceId: string;

  @Field({ description: 'gig reference id', nullable: true })
  userId: string;
}
