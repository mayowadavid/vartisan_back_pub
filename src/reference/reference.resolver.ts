import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ReferenceService } from './reference.service';
import { Reference } from './entities/reference.entity';
import { CreateReferenceInput } from './dto/create-reference.input';
import { UpdateReferenceInput } from './dto/update-reference.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/users/gql-users.guard';
import { CurrentUser } from 'src/users/current-user';

@Resolver(() => Reference)
export class ReferenceResolver {
  constructor(private readonly referenceService: ReferenceService) {}

  @Mutation(() => Reference)
  createReference(
    @Args('createReferenceInput') createReferenceInput: CreateReferenceInput,
  ) {
    return this.referenceService.create(createReferenceInput);
  }

  @Query(() => [Reference], { name: 'getAllreference' })
  findAll() {
    return this.referenceService.findAll();
  }

  @Query(() => [Reference], { name: 'findReferenceByUser' })
  @UseGuards(GqlAuthGuard)
  findReferenceByUser(
    @CurrentUser()
    user,
  ) {
    return this.referenceService.findReferenceByUser(user);
  }

  @Query(() => Reference, { name: 'findOnereference' })
  findOne(@Args('id') id: string) {
    return this.referenceService.findOne(id);
  }

  @Mutation(() => Reference)
  updateReference(
    @Args('updateReferenceInput') updateReferenceInput: UpdateReferenceInput,
  ) {
    return this.referenceService.update(
      updateReferenceInput.id,
      updateReferenceInput,
    );
  }

  @Mutation(() => Reference)
  removeReference(@Args('id') id: string) {
    return this.referenceService.remove(id);
  }
}
