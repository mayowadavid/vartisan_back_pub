import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SubmenuService } from './submenu.service';
import { Submenu } from './entities/submenu.entity';
import { CreateSubmenuInput } from './dto/create-submenu.input';
import { UpdateSubmenuInput } from './dto/update-submenu.input';

@Resolver(() => Submenu)
export class SubmenuResolver {
  constructor(private readonly submenuService: SubmenuService) {}

  @Mutation(() => Submenu)
  createSubmenu(
    @Args('createSubmenuInput') createSubmenuInput: CreateSubmenuInput,
  ) {
    return this.submenuService.create(createSubmenuInput);
  }

  @Query(() => [Submenu], { name: 'submenu' })
  findAll() {
    return this.submenuService.findAll();
  }

  @Query(() => Submenu, { name: 'submenu' })
  findOne(@Args('id') id: string) {
    return this.submenuService.findOne(id);
  }

  @Mutation(() => Submenu)
  updateSubmenu(
    @Args('updateSubmenuInput') updateSubmenuInput: UpdateSubmenuInput,
  ) {
    return this.submenuService.update(
      updateSubmenuInput.id,
      updateSubmenuInput,
    );
  }

  @Mutation(() => Submenu)
  removeSubmenu(@Args('id') id: string) {
    return this.submenuService.remove(id);
  }
}
