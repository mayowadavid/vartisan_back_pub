import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GigFaqService } from './gig-faq.service';
import { GigFaq } from './entities/gig-faq.entity';
import { CreateGigFaqInput } from './dto/create-gig-faq.input';
import { UpdateGigFaqInput } from './dto/update-gig-faq.input';

@Resolver(() => GigFaq)
export class GigFaqResolver {
  constructor(private readonly gigFaqService: GigFaqService) {}

  @Mutation(() => GigFaq)
  createGigFaq(
    @Args('createGigFaqInput') createGigFaqInput: CreateGigFaqInput,
  ) {
    return this.gigFaqService.create(createGigFaqInput);
  }

  @Query(() => [GigFaq], { name: 'gigFaq' })
  findAll() {
    return this.gigFaqService.findAll();
  }

  @Query(() => GigFaq, { name: 'gigFaq' })
  findOne(@Args('id') id: string) {
    return this.gigFaqService.findOne(id);
  }

  @Mutation(() => GigFaq)
  updateGigFaq(
    @Args('updateGigFaqInput') updateGigFaqInput: UpdateGigFaqInput,
  ) {
    return this.gigFaqService.update(updateGigFaqInput.id, updateGigFaqInput);
  }

  @Mutation(() => GigFaq)
  removeGigFaq(@Args('id') id: string) {
    return this.gigFaqService.remove(id);
  }
}
