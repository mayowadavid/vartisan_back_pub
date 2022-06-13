import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateBannerInput {
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
