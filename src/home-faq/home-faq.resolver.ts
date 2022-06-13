import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { HomeFaqService } from './home-faq.service';
import { HomeFaq } from './entities/home-faq.entity';
import { CreateHomeFaqInput } from './dto/create-home-faq.input';
import { UpdateHomeFaqInput } from './dto/update-home-faq.input';

@Resolver(() => HomeFaq)
export class HomeFaqResolver {
  constructor(private readonly homeFaqService: HomeFaqService) {}

  @Mutation(() => HomeFaq)
  createHomeFaq(
    @Args('createHomeFaqInput') createHomeFaqInput: CreateHomeFaqInput,
  ) {
    return this.homeFaqService.create(createHomeFaqInput);
  }

  @Query(() => [HomeFaq], { name: 'homeFaq' })
  findAll() {
    return this.homeFaqService.findAll();
  }

  @Query(() => HomeFaq, { name: 'homeFaq' })
  findOne(@Args('id') id: string) {
    return this.homeFaqService.findOne(id);
  }

  @Mutation(() => HomeFaq)
  updateHomeFaq(
    @Args('updateHomeFaqInput') updateHomeFaqInput: UpdateHomeFaqInput,
  ) {
    return this.homeFaqService.update(
      updateHomeFaqInput.id,
      updateHomeFaqInput,
    );
  }

  @Mutation(() => HomeFaq)
  removeHomeFaq(@Args('id') id: string) {
    return this.homeFaqService.remove(id);
  }
}
