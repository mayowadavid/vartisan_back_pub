import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FeaturedService } from './featured.service';
import { Featured } from './entities/featured.entity';
import { CreateFeaturedInput } from './dto/create-featured.input';
import { UpdateFeaturedInput } from './dto/update-featured.input';

@Resolver(() => Featured)
export class FeaturedResolver {
  constructor(private readonly featuredService: FeaturedService) {}

  @Mutation(() => Featured)
  createFeatured(
    @Args('createFeaturedInput') createFeaturedInput: CreateFeaturedInput,
  ) {
    return this.featuredService.create(createFeaturedInput);
  }

  @Query(() => [Featured], { name: 'featured' })
  findAll() {
    return this.featuredService.findAll();
  }

  @Query(() => Featured, { name: 'featured' })
  findOne(@Args('id') id: string) {
    return this.featuredService.findOne(id);
  }

  @Mutation(() => Featured)
  updateFeatured(
    @Args('updateFeaturedInput') updateFeaturedInput: UpdateFeaturedInput,
  ) {
    return this.featuredService.update(
      updateFeaturedInput.id,
      updateFeaturedInput,
    );
  }

  @Mutation(() => Featured)
  removeFeatured(@Args('id') id: string) {
    return this.featuredService.remove(id);
  }
}
