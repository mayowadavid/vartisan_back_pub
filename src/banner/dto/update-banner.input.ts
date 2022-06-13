import { CreateBannerInput } from './create-banner.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBannerInput extends PartialType(CreateBannerInput) {
  @Field()
  id: string;

  @Field({ description: 'bannerTitle', nullable: true })
  bannerTitle: string;

  @Field({ description: 'bannerDescription', nullable: true })
  bannerDescription: string;

  @Field({ description: 'bannerMiddleContent', nullable: true })
  bannerMiddleContent: string;

  @Field({ description: 'bannerFirstACtionTitle', nullable: true })
  bannerFirstActionTitle: string;

  @Field({ description: 'bannerSecondACtionTitle', nullable: true })
  bannerSecondACtionTitle: string;

  @Field({ description: 'file id', nullable: true })
  fileId: string;
}
