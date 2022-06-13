import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { BannerService } from './banner.service';
import { Banner } from './entities/banner.entity';
import { CreateBannerInput } from './dto/create-banner.input';
import { UpdateBannerInput } from './dto/update-banner.input';

@Resolver(() => Banner)
export class BannerResolver {
  constructor(private readonly bannerService: BannerService) {}

  @Mutation(() => Banner)
  createBanner(
    @Args('createBannerInput') createBannerInput: CreateBannerInput,
  ) {
    return this.bannerService.create(createBannerInput);
  }

  @Query(() => [Banner], { name: 'findAllbanner' })
  findAll() {
    return this.bannerService.findAll();
  }

  @Query(() => Banner, { name: 'findbanner' })
  findOne(@Args('id') id: string) {
    return this.bannerService.findOne(id);
  }

  @Mutation(() => Banner)
  updateBanner(
    @Args('updateBannerInput') updateBannerInput: UpdateBannerInput,
  ) {
    return this.bannerService.update(updateBannerInput.id, updateBannerInput);
  }

  @Mutation(() => Banner)
  removeBanner(@Args('id') id: string) {
    return this.bannerService.remove(id);
  }
}
