import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FaqImageService } from './faq-image.service';
import { FaqImage } from './entities/faq-image.entity';
import { CreateFaqImageInput } from './dto/create-faq-image.input';
import { UpdateFaqImageInput } from './dto/update-faq-image.input';

@Resolver(() => FaqImage)
export class FaqImageResolver {
  constructor(private readonly faqImageService: FaqImageService) {}

  @Mutation(() => FaqImage)
  createFaqImage(
    @Args('createFaqImageInput') createFaqImageInput: CreateFaqImageInput,
  ) {
    return this.faqImageService.create(createFaqImageInput);
  }

  @Query(() => [FaqImage], { name: 'faqImage' })
  findAll() {
    return this.faqImageService.findAll();
  }

  @Query(() => FaqImage, { name: 'faqImage' })
  findOne(@Args('id') id: string) {
    return this.faqImageService.findOne(id);
  }

  @Mutation(() => FaqImage)
  updateFaqImage(
    @Args('updateFaqImageInput') updateFaqImageInput: UpdateFaqImageInput,
  ) {
    return this.faqImageService.update(
      updateFaqImageInput.id,
      updateFaqImageInput,
    );
  }

  @Mutation(() => FaqImage)
  removeFaqImage(@Args('id') id: string) {
    return this.faqImageService.remove(id);
  }
}
