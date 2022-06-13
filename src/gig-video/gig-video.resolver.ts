import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GigVideoService } from './gig-video.service';
import { GigVideo } from './entities/gig-video.entity';
import { CreateGigVideoInput } from './dto/create-gig-video.input';
import { UpdateGigVideoInput } from './dto/update-gig-video.input';

@Resolver(() => GigVideo)
export class GigVideoResolver {
  constructor(private readonly gigVideoService: GigVideoService) {}

  @Mutation(() => GigVideo)
  createGigVideo(
    @Args('createGigVideoInput') createGigVideoInput: CreateGigVideoInput,
  ) {
    return this.gigVideoService.create(createGigVideoInput);
  }

  @Query(() => [GigVideo], { name: 'gigVideo' })
  findAll() {
    return this.gigVideoService.findAll();
  }

  @Query(() => GigVideo, { name: 'gigVideo' })
  findOne(@Args('id') id: string) {
    return this.gigVideoService.findOne(id);
  }

  @Mutation(() => GigVideo)
  updateGigVideo(
    @Args('updateGigVideoInput') updateGigVideoInput: UpdateGigVideoInput,
  ) {
    return this.gigVideoService.update(
      updateGigVideoInput.id,
      updateGigVideoInput,
    );
  }

  @Mutation(() => GigVideo)
  removeGigVideo(@Args('id') id: string) {
    return this.gigVideoService.remove(id);
  }
}
