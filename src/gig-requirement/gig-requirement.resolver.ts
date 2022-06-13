import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GigRequirementService } from './gig-requirement.service';
import { GigRequirement } from './entities/gig-requirement.entity';
import { CreateGigRequirementInput } from './dto/create-gig-requirement.input';
import { UpdateGigRequirementInput } from './dto/update-gig-requirement.input';

@Resolver(() => GigRequirement)
export class GigRequirementResolver {
  constructor(private readonly gigRequirementService: GigRequirementService) {}

  @Mutation(() => GigRequirement)
  createGigRequirement(
    @Args('createGigRequirementInput')
    createGigRequirementInput: CreateGigRequirementInput,
  ) {
    return this.gigRequirementService.create(createGigRequirementInput);
  }

  @Query(() => [GigRequirement], { name: 'gigRequirement' })
  findAll() {
    return this.gigRequirementService.findAll();
  }

  @Query(() => GigRequirement, { name: 'gigRequirement' })
  findOne(@Args('id') id: string) {
    return this.gigRequirementService.findOne(id);
  }

  @Mutation(() => GigRequirement)
  updateGigRequirement(
    @Args('updateGigRequirementInput')
    updateGigRequirementInput: UpdateGigRequirementInput,
  ) {
    return this.gigRequirementService.update(
      updateGigRequirementInput.id,
      updateGigRequirementInput,
    );
  }

  @Mutation(() => GigRequirement)
  removeGigRequirement(@Args('id') id: string) {
    return this.gigRequirementService.remove(id);
  }
}
