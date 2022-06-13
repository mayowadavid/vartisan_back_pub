import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GigformatService } from './gigformat.service';
import { Gigformat } from './entities/gigformat.entity';
import { CreateGigformatInput } from './dto/create-gigformat.input';
import { UpdateGigformatInput } from './dto/update-gigformat.input';

@Resolver(() => Gigformat)
export class GigformatResolver {
  constructor(private readonly gigformatService: GigformatService) {}

  @Mutation(() => Gigformat)
  createGigformat(
    @Args('createGigformatInput') createGigformatInput: CreateGigformatInput,
  ) {
    return this.gigformatService.create(createGigformatInput);
  }

  @Query(() => [Gigformat], { name: 'gigformat' })
  findAll() {
    return this.gigformatService.findAll();
  }

  @Query(() => Gigformat, { name: 'gigformat' })
  findOne(@Args('id') id: string) {
    return this.gigformatService.findOne(id);
  }

  @Mutation(() => Gigformat)
  updateGigformat(
    @Args('updateGigformatInput') updateGigformatInput: UpdateGigformatInput,
  ) {
    return this.gigformatService.update(
      updateGigformatInput.id,
      updateGigformatInput,
    );
  }

  @Mutation(() => Gigformat)
  removeGigformat(@Args('id') id: string) {
    return this.gigformatService.remove(id);
  }
}
