import { CreateGigRequirementInput } from './create-gig-requirement.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateGigRequirementInput extends PartialType(
  CreateGigRequirementInput,
) {
  @Field()
  id: string;

  @Field({ description: 'requirement name', nullable: true })
  requirementName: string;

  @Field({ description: 'required faq', nullable: true })
  required: boolean;

  @Field({ description: 'faq text', nullable: true })
  text: boolean;

  @Field({ description: 'faq link url', nullable: true })
  link: boolean;

  @Field({ description: 'faq gig id', nullable: true })
  gigId: string;
}
