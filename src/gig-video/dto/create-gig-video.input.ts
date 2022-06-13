import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateGigVideoInput {
  @Field({ description: 'gig name', nullable: true })
  name: string;

  @Field({ description: 'gig default video', nullable: true })
  selected: boolean;

  @Field({ description: 'fileId', nullable: true })
  fileId: string;

  @Field({ description: 'gig Id', nullable: true })
  gigId: string;
}
