import { Module } from '@nestjs/common';
import { EmployeeModule } from './employee/employee.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectModule } from './project/project.module';
import { UsersModule } from './users/users.module';
import { ProfileModule } from './profile/profile.module';
import { GigModule } from './gig/gig.module';
import { OrderModule } from './order/order.module';
import { HomeModule } from './home/home.module';
import { CategoriesModule } from './categories/categories.module';
import { HeadersModule } from './headers/headers.module';
import { MenuModule } from './menu/menu.module';
import { SubmenuModule } from './submenu/submenu.module';
import { FooterModule } from './footer/footer.module';
import { FeaturedModule } from './featured/featured.module';
import { GigTagsModule } from './gig-tags/gig-tags.module';
import { GigformatModule } from './gigformat/gigformat.module';
import { RatingModule } from './rating/rating.module';
import { EarningsModule } from './earnings/earnings.module';
import { ChatsModule } from './chats/chats.module';
import { MessagesModule } from './messages/messages.module';
import { SocialMediaModule } from './social-media/social-media.module';
import { OrderTemplateModule } from './order-template/order-template.module';
import { FilesModule } from './files/files.module';
import { OrderRequirementModule } from './order-requirement/order-requirement.module';
import { OrderFaqModule } from './order-faq/order-faq.module';
import { FavoritesModule } from './favorites/favorites.module';
import { BlogModule } from './blog/blog.module';
import { CommentsModule } from './comments/comments.module';
import { ComplaintsModule } from './complaints/complaints.module';
import { HomeFaqModule } from './home-faq/home-faq.module';
import { ReferenceModule } from './reference/reference.module';
import { NotificationsModule } from './notifications/notifications.module';
import { BannerModule } from './banner/banner.module';
import { FaqImageModule } from './faq-image/faq-image.module';
import { SubCategoryModule } from './sub-category/sub-category.module';
import { RushOrderModule } from './rush-order/rush-order.module';
import { CommercialUseModule } from './commercial-use/commercial-use.module';
import { PrivateCommissionModule } from './private-commission/private-commission.module';
import { GigFaqModule } from './gig-faq/gig-faq.module';
import { GigRequirementModule } from './gig-requirement/gig-requirement.module';
import { GigGalleryModule } from './gig-gallery/gig-gallery.module';
import { GigVideoModule } from './gig-video/gig-video.module';
import { ModelsService } from './models/models.service';
import { OrderFeedbackModule } from './order-feedback/order-feedback.module';
import { PusherService } from './pusher/pusher.service';
import { ConfigModule } from '@nestjs/config';
import { config } from './config';
import { DatabaseConfig } from './database.config';
import { TransactionModule } from './transaction/transaction.module';


@Module({
  imports: [
    EmployeeModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      cors: {
        origin: '*',
        credentials: true,
      },
      driver: ApolloDriver,
      debug: true,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql'),
      installSubscriptionHandlers: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: DatabaseConfig,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
      ignoreEnvFile: true,
    }),
    ProjectModule,
    UsersModule,
    ProfileModule,
    GigModule,
    OrderModule,
    HomeModule,
    CategoriesModule,
    HeadersModule,
    MenuModule,
    SubmenuModule,
    FooterModule,
    FeaturedModule,
    GigformatModule,
    GigTagsModule,
    RatingModule,
    EarningsModule,
    ChatsModule,
    MessagesModule,
    SocialMediaModule,
    OrderTemplateModule,
    FilesModule,
    OrderRequirementModule,
    OrderFaqModule,
    FavoritesModule,
    BlogModule,
    CommentsModule,
    ComplaintsModule,
    HomeFaqModule,
    ReferenceModule,
    NotificationsModule,
    BannerModule,
    FaqImageModule,
    SubCategoryModule,
    RushOrderModule,
    CommercialUseModule,
    PrivateCommissionModule,
    GigFaqModule,
    GigRequirementModule,
    GigGalleryModule,
    GigVideoModule,
    OrderFeedbackModule,
    TransactionModule,
  ],
  controllers: [],
  providers: [ModelsService, PusherService],
})
export class AppModule {}
