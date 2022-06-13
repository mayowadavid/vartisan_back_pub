import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CommercialUseService } from './commercial-use.service';
import { CommercialUse } from './entities/commercial-use.entity';
import { CreateCommercialUseInput } from './dto/create-commercial-use.input';
import { UpdateCommercialUseInput } from './dto/update-commercial-use.input';

@Resolver(() => CommercialUse)
export class CommercialUseResolver {
  constructor(private readonly commercialUseService: CommercialUseService) {}

  @Mutation(() => CommercialUse)
  createCommercialUse(
    @Args('createCommercialUseInput')
    createCommercialUseInput: CreateCommercialUseInput,
  ) {
    return this.commercialUseService.create(createCommercialUseInput);
  }

  @Query(() => [CommercialUse], { name: 'commercialUse' })
  findAll() {
    return this.commercialUseService.findAll();
  }

  @Query(() => CommercialUse, { name: 'commercialUse' })
  findOne(@Args('id') id: string) {
    return this.commercialUseService.findOne(id);
  }

  @Mutation(() => CommercialUse)
  updateCommercialUse(
    @Args('updateCommercialUseInput')
    updateCommercialUseInput: UpdateCommercialUseInput,
  ) {
    return this.commercialUseService.update(
      updateCommercialUseInput.id,
      updateCommercialUseInput,
    );
  }

  @Mutation(() => CommercialUse)
  removeCommercialUse(@Args('id') id: string) {
    return this.commercialUseService.remove(id);
  }
}
