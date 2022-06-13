import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GigGalleryService } from './gig-gallery.service';
import { GigGallery } from './entities/gig-gallery.entity';
import { CreateGigGalleryInput } from './dto/create-gig-gallery.input';
import { UpdateGigGalleryInput } from './dto/update-gig-gallery.input';

@Resolver(() => GigGallery)
export class GigGalleryResolver {
  constructor(private readonly gigGalleryService: GigGalleryService) {}

  @Mutation(() => GigGallery)
  createGigGallery(
    @Args('createGigGalleryInput') createGigGalleryInput: CreateGigGalleryInput,
  ) {
    return this.gigGalleryService.create(createGigGalleryInput);
  }

  @Query(() => [GigGallery], { name: 'gigGallery' })
  findAll() {
    return this.gigGalleryService.findAll();
  }

  @Query(() => GigGallery, { name: 'gigGallery' })
  findOne(@Args('id') id: string) {
    return this.gigGalleryService.findOne(id);
  }

  @Mutation(() => GigGallery)
  updateGigGallery(
    @Args('updateGigGalleryInput') updateGigGalleryInput: UpdateGigGalleryInput,
  ) {
    return this.gigGalleryService.update(
      updateGigGalleryInput.id,
      updateGigGalleryInput,
    );
  }

  @Mutation(() => GigGallery)
  removeGigGallery(@Args('id') id: string) {
    return this.gigGalleryService.remove(id);
  }
}
