import { ObjectType, Field } from '@nestjs/graphql';
import { Chat } from 'src/chats/entities/chat.entity';
import { Favorite } from 'src/favorites/entities/favorite.entity';
import { Gig } from 'src/gig/entities/gig.entity';
import { Order } from 'src/order/entities/order.entity';
import { Profile } from 'src/profile/entities/profile.entity';
import { Comment } from 'src/comments/entities/comment.entity';
import { Notification } from 'src/notifications/entities/notification.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Message } from '../../messages/entities/message.entity';
import { Reference } from 'src/reference/entities/reference.entity';
import { Blog } from 'src/blog/entities/blog.entity';
import { Earning } from 'src/earnings/entities/earning.entity';
import { Transaction } from 'src/transaction/entities/transaction.entity';

export enum UserStatus {
  BANNED = 'banned',
  APPROVED = 'approved',
  REJECTED = 'rejected',
  PENDING = 'pending',
}
@ObjectType()
@Entity()
export class User {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field({ description: 'client username', nullable: true })
  @Column({ nullable: true, unique: true })
  userName: string;

  @Field({ description: 'client email', nullable: true })
  @Column({ nullable: true })
  email: string;

  @Field({ description: 'client password', nullable: true })
  @Column({ nullable: true })
  password: string;

  @Field({ description: 'profile Id', nullable: true })
  @Column({ nullable: true })
  profileId: string;

  @Field({ description: 'order Id', nullable: true })
  @Column({ nullable: true })
  orderId: string;

  @Field({ description: 'chat Id', nullable: true })
  @Column({ nullable: true })
  chatId: string;

  @Field({ description: 'gig Id', nullable: true })
  @Column({ nullable: true })
  gigId: string;

  @Field({ description: 'earning Id', nullable: true })
  @Column({ nullable: true })
  earningId: string;

  @Field({ description: 'refresh token', nullable: true })
  @Column({ nullable: true, name: 'refreshtoken' })
  refreshToken: string;

  @Field({ description: 'refresh token exp', nullable: true })
  @Column({ type: 'date', nullable: true, name: 'refreshtokenexp' })
  refreshTokenExp: string;

  @Field({ description: 'registration date', nullable: true })
  @Column({ nullable: true, name: 'registration date' })
  createdAt: string;

  @Field({ description: 'user status', nullable: true })
  @Column({
    nullable: true,
    type: 'enum',
    enum: UserStatus,
    default: 'pending',
  })
  status: UserStatus;

  @OneToMany(() => Transaction, (transaction) => transaction.transactionSender)
  @Field(() => [Transaction], {
    description: 'sender transaction',
    nullable: true,
  })
  transactionSender: Transaction[];

  @OneToMany(
    () => Transaction,
    (transaction) => transaction.transactionReceiver,
  )
  @Field(() => [Transaction], {
    description: 'receiver transaction',
    nullable: true,
  })
  transactionReceiver: Transaction[];

  @OneToMany(() => Comment, (comment) => comment.user)
  @Field(() => [Comment], { description: 'user comment', nullable: true })
  comment: Comment[];

  @OneToMany(() => Blog, (blog) => blog.user, {
    cascade: true,
  })
  @Field(() => [Blog], { description: 'user blog', nullable: true })
  blog: Blog[];

  @OneToMany(() => Reference, (reference) => reference.user)
  @Field(() => [Reference], { description: 'user reference', nullable: true })
  reference: Reference[];

  @OneToMany(() => Notification, (notification) => notification.user)
  @Field(() => [Notification], {
    description: 'user notification',
    nullable: true,
  })
  notification: Notification[];

  @OneToMany(() => Chat, (chat) => chat.receiver)
  @Field(() => [Chat], { description: 'user orders client', nullable: true })
  receiver: Chat[];

  @OneToMany(() => Chat, (chat) => chat.sender)
  @Field(() => [Chat], { description: 'user orders seller', nullable: true })
  sender: Chat[];

  @OneToMany(() => Order, (order) => order.client)
  @Field(() => [Order], { description: 'user orders client', nullable: true })
  client: Order[];

  @OneToMany(() => Order, (order) => order.seller)
  @Field(() => [Order], { description: 'user orders seller', nullable: true })
  seller: Order[];

  @OneToOne(() => Earning, (earning) => earning.user)
  @JoinColumn()
  @Field(() => Earning, { description: 'user earning', nullable: true })
  earning: Earning;

  @OneToOne(() => Profile, (profile) => profile.user)
  @JoinColumn()
  @Field(() => Profile, { description: 'chat profile', nullable: true })
  profile: Profile;

  @OneToMany(() => Message, (message) => message.user)
  @Field(() => [Message], { description: 'user messages' })
  message: Message[];

  @OneToMany(() => Favorite, (favorite) => favorite.user)
  @Field(() => [Favorite], { description: 'Gig favorite', nullable: true })
  favorite: Favorite[];

  @OneToMany(() => Gig, (gig) => gig.user)
  @Field(() => [Gig], { description: 'gig', nullable: true })
  gig: Gig[];
}
