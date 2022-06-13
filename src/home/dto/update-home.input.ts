import { CreateHomeInput } from './create-home.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateHomeInput extends PartialType(CreateHomeInput) {
  @Field()
  id: string;

  @Field({ description: 'site name' })
  siteName: string;

  @Field({ description: 'logo' })
  logoUrl: string;

  @Field({ description: 'bannerImage id' })
  bannerImageId: string;

  @Field({ description: 'bannerTitle' })
  bannerTitle: string;

  @Field({ description: 'bannerDescription' })
  bannerDescription: string;

  @Field({ description: 'bannerFirstACtionTitle' })
  bannerFirstACtionTitle: string;

  @Field({ description: 'bannerSecondACtionTitle' })
  bannerSecondACtionTitle: string;

  @Field({ description: 'display Category' })
  showCategory: boolean;

  @Field({ description: 'faq id' })
  homeFaqId: string;

  @Field({ description: 'display featured category' })
  showFeatured: boolean;

  @Field({ description: 'display latest delivery' })
  showLatest: boolean;

  @Field({ description: 'display site process' })
  showProcess: boolean;

  @Field({ description: 'display site faq' })
  showFaq: boolean;

  @Field({ description: 'display site optin' })
  showOptin: boolean;

  @Field({ description: 'header id' })
  headerId: string;
}
