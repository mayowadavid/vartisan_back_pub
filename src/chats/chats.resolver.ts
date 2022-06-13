import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ChatsService } from './chats.service';
import { Chat } from './entities/chat.entity';
import { CreateChatInput } from './dto/create-chat.input';
import { UpdateChatInput } from './dto/update-chat.input';
import { GqlAuthGuard } from 'src/users/gql-users.guard';
import { UseGuards } from '@nestjs/common';
import { CurrentUser } from 'src/users/current-user';

@Resolver(() => Chat)
export class ChatsResolver {
  constructor(private readonly chatsService: ChatsService) {}

  @Mutation(() => Chat, { name: 'createChat' })
  @UseGuards(GqlAuthGuard)
  createChat(
    @CurrentUser()
    user,
    @Args('createChat') createChatInput: CreateChatInput,
  ) {
    return this.chatsService.create(user, createChatInput);
  }

  @Query(() => [Chat], { name: 'chats' })
  findAll() {
    return this.chatsService.findAll();
  }

  @Query(() => [Chat], { name: 'chatsByUser' })
  @UseGuards(GqlAuthGuard)
  findChatByUser(@CurrentUser() user) {
    return this.chatsService.findChatByUser(user);
  }

  @Query(() => Chat, { name: 'chat' })
  findOne(@Args('id') id: string) {
    return this.chatsService.findOne(id);
  }

  @Query(() => Chat, { name: 'findChatByExistence' })
  @UseGuards(GqlAuthGuard)
  findChatByExisyence(
    @CurrentUser()
    user,
    @Args('createChat') createChatInput: CreateChatInput,
  ) {
    return this.chatsService.findChatByExistence(user, createChatInput);
  }

  @Mutation(() => Chat)
  @UseGuards(GqlAuthGuard)
  updateChat(
    @CurrentUser()
    user,
    @Args('updateChatInput') updateChatInput: UpdateChatInput,
  ) {
    return this.chatsService.update(user, updateChatInput.id, updateChatInput);
  }

  @Mutation(() => Chat)
  removeChat(@Args('id') id: string) {
    return this.chatsService.remove(id);
  }
}
