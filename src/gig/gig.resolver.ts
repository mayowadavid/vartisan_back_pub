import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { GigService } from './gig.service';
import { Gig } from './entities/gig.entity';
import { CreateGigInput, UserGigInput } from './dto/create-gig.input';
import { UpdateGigInput } from './dto/update-gig.input';
import { GqlAuthGuard } from 'src/users/gql-users.guard';
import { UseGuards } from '@nestjs/common';
import { CurrentUser } from 'src/users/current-user';

@Resolver(() => Gig)
export class GigResolver {
  constructor(private readonly gigService: GigService) {}

  @Mutation(() => Gig, { name: 'creategig' })
  @UseGuards(GqlAuthGuard)
  createGig(
    @CurrentUser()
    user,
    @Args('createGigInput') createGigInput: CreateGigInput,
  ) {
    return this.gigService.create(user, createGigInput);
  }

  @Query(() => [Gig], { name: 'getAllgig' })
  findAll() {
    return this.gigService.findAll();
  }

  @Query(() => Gig, { name: 'gig' })
  findOne(@Args('id') id: string) {
    return this.gigService.findOne(id);
  }

  @Query(() => Gig, { name: 'findGigByUser' })
  findGigByUser(@Args('userGig') userGigInput: UserGigInput) {
    return this.gigService.findGigByUser(
      userGigInput.name,
      userGigInput.userName,
    );
  }

  @Query(() => [Gig], { name: 'findAllUserGig' })
  @UseGuards(GqlAuthGuard)
  findAllUserGig(
    @CurrentUser()
    user,
  ) {
    return this.gigService.findAllUserGig(user);
  }

  @Mutation(() => Gig)
  updateGig(@Args('updateGigInput') updateGigInput: UpdateGigInput) {
    return this.gigService.update(updateGigInput.id, updateGigInput);
  }

  @Mutation(() => Gig)
  removeGig(@Args('id') id: string) {
    return this.gigService.remove(id);
  }
}
