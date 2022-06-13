import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { HeadersService } from './headers.service';
import { Header } from './entities/header.entity';
import { CreateHeaderInput } from './dto/create-header.input';
import { UpdateHeaderInput } from './dto/update-header.input';

@Resolver(() => Header)
export class HeadersResolver {
  constructor(private readonly headersService: HeadersService) {}

  @Mutation(() => Header)
  createHeader(
    @Args('createHeaderInput') createHeaderInput: CreateHeaderInput,
  ) {
    return this.headersService.create(createHeaderInput);
  }

  @Query(() => [Header], { name: 'headers' })
  findAll() {
    return this.headersService.findAll();
  }

  @Query(() => Header, { name: 'header' })
  findOne(@Args('id') id: string) {
    return this.headersService.findOne(id);
  }

  @Mutation(() => Header)
  updateHeader(
    @Args('updateHeaderInput') updateHeaderInput: UpdateHeaderInput,
  ) {
    return this.headersService.update(updateHeaderInput.id, updateHeaderInput);
  }

  @Mutation(() => Header)
  removeHeader(@Args('id') id: string) {
    return this.headersService.remove(id);
  }
}
