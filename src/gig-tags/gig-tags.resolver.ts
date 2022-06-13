import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { GigTagsService } from './gig-tags.service';
import { GigTag } from './entities/gig-tag.entity';
import { UpdateGigTagInput } from './dto/update-gig-tag.input';
import { CreateGigTagInput } from './dto/create-gig-tag.input';
@Resolver(() => GigTag)
export class GigTagsResolver {
  constructor(private readonly gigTagsService: GigTagsService) {}

  @Mutation(() => GigTag)
  createGigTag(
    @Args('createGigTagInput') createGigTagInput: CreateGigTagInput,
  ) {
    return this.gigTagsService.create(createGigTagInput);
  }

  @Query(() => [GigTag], { name: 'gigTags' })
  findAll() {
    return this.gigTagsService.findAll();
  }

  @Query(() => GigTag, { name: 'gigTag' })
  findOne(@Args('id') id: string) {
    return this.gigTagsService.findOne(id);
  }

  @Mutation(() => GigTag)
  updateGigTag(
    @Args('updateGigTagInput') updateGigTagInput: UpdateGigTagInput,
  ) {
    return this.gigTagsService.update(updateGigTagInput.id, updateGigTagInput);
  }

  @Mutation(() => GigTag)
  removeGigTag(@Args('id') id: string) {
    return this.gigTagsService.remove(id);
  }
}
