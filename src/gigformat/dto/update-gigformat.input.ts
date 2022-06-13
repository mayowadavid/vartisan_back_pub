import { CreateGigformatInput } from './create-gigformat.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateGigformatInput extends PartialType(CreateGigformatInput) {
  @Field()
  id: string;

  @Field({ description: 'ai format name', nullable: true })
  ai: boolean;

  @Field({ description: 'psd format name', nullable: true })
  psd: boolean;

  @Field({ description: 'swf format name', nullable: true })
  swf: boolean;

  @Field({ description: 'gif format name', nullable: true })
  gif: boolean;

  @Field({ description: 'blend format name', nullable: true })
  blend: boolean;

  @Field({ description: 'bmpr format name', nullable: true })
  bmpr: boolean;

  @Field({ description: 'eps format name', nullable: true })
  eps: boolean;

  @Field({ description: 'jpg format name', nullable: true })
  jpg: boolean;

  @Field({ description: 'fig format name', nullable: true })
  fig: boolean;

  @Field({ description: 'ico format name', nullable: true })
  ico: boolean;

  @Field({ description: 'png format name', nullable: true })
  png: boolean;

  @Field({ description: 'other format name', nullable: true })
  other: boolean;

  @Field({ description: 'gig format id', nullable: true })
  gigId: string;
}
