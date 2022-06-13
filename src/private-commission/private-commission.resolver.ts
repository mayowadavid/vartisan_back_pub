import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PrivateCommissionService } from './private-commission.service';
import { PrivateCommission } from './entities/private-commission.entity';
import { CreatePrivateCommissionInput } from './dto/create-private-commission.input';
import { UpdatePrivateCommissionInput } from './dto/update-private-commission.input';

@Resolver(() => PrivateCommission)
export class PrivateCommissionResolver {
  constructor(
    private readonly privateCommissionService: PrivateCommissionService,
  ) {}

  @Mutation(() => PrivateCommission)
  createPrivateCommission(
    @Args('createPrivateCommissionInput')
    createPrivateCommissionInput: CreatePrivateCommissionInput,
  ) {
    return this.privateCommissionService.create(createPrivateCommissionInput);
  }

  @Query(() => [PrivateCommission], { name: 'privateCommission' })
  findAll() {
    return this.privateCommissionService.findAll();
  }

  @Query(() => PrivateCommission, { name: 'privateCommission' })
  findOne(@Args('id') id: string) {
    return this.privateCommissionService.findOne(id);
  }

  @Mutation(() => PrivateCommission)
  updatePrivateCommission(
    @Args('updatePrivateCommissionInput')
    updatePrivateCommissionInput: UpdatePrivateCommissionInput,
  ) {
    return this.privateCommissionService.update(
      updatePrivateCommissionInput.id,
      updatePrivateCommissionInput,
    );
  }

  @Mutation(() => PrivateCommission)
  removePrivateCommission(@Args('id') id: string) {
    return this.privateCommissionService.remove(id);
  }
}
