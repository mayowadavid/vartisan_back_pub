import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MessagesService } from './messages.service';
import { Message } from './entities/message.entity';
import { CreateMessageInput } from './dto/create-message.input';
import { UpdateMessageInput } from './dto/update-message.input';
import { GqlAuthGuard } from 'src/users/gql-users.guard';
import { UseGuards } from '@nestjs/common';
import { CurrentUser } from 'src/users/current-user';
import { PubSub } from 'graphql-subscriptions';

@Resolver(() => Message)
export class MessagesResolver {
  private pubSub: PubSub;
  constructor(private readonly messagesService: MessagesService) {
    this.pubSub = new PubSub();
  }

  @Mutation(() => Message, { name: 'createMessage' })
  @UseGuards(GqlAuthGuard)
  async createMessage(
    @CurrentUser()
    user,
    @Args('createMessageInput') createMessageInput: CreateMessageInput,
  ) {
    const message: Message = await this.messagesService.create(
      user,
      createMessageInput,
    );
    this.pubSub.publish('messageSubscription', {
      messageSubscription: message,
    });
    return message;
  }

  @Query(() => [Message], { name: 'getAllmessages' })
  findAll() {
    return this.messagesService.findAll();
  }

  @Query(() => Message, { name: 'message' })
  findOne(@Args('id') id: string) {
    return this.messagesService.findOne(id);
  }

  @Mutation(() => Message)
  updateMessage(
    @Args('updateMessageInput') updateMessageInput: UpdateMessageInput,
  ) {
    return this.messagesService.update(
      updateMessageInput.id,
      updateMessageInput,
    );
  }

  @Mutation(() => Message)
  removeMessage(@Args('id') id: string) {
    return this.messagesService.remove(id);
  }
}
