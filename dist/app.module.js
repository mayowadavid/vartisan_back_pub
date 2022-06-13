"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const employee_module_1 = require("./employee/employee.module");
const graphql_1 = require("@nestjs/graphql");
const path_1 = require("path");
const apollo_1 = require("@nestjs/apollo");
const typeorm_1 = require("@nestjs/typeorm");
const project_module_1 = require("./project/project.module");
const users_module_1 = require("./users/users.module");
const profile_module_1 = require("./profile/profile.module");
const gig_module_1 = require("./gig/gig.module");
const order_module_1 = require("./order/order.module");
const home_module_1 = require("./home/home.module");
const categories_module_1 = require("./categories/categories.module");
const headers_module_1 = require("./headers/headers.module");
const menu_module_1 = require("./menu/menu.module");
const submenu_module_1 = require("./submenu/submenu.module");
const footer_module_1 = require("./footer/footer.module");
const featured_module_1 = require("./featured/featured.module");
const gig_tags_module_1 = require("./gig-tags/gig-tags.module");
const gigformat_module_1 = require("./gigformat/gigformat.module");
const rating_module_1 = require("./rating/rating.module");
const earnings_module_1 = require("./earnings/earnings.module");
const chats_module_1 = require("./chats/chats.module");
const messages_module_1 = require("./messages/messages.module");
const social_media_module_1 = require("./social-media/social-media.module");
const order_template_module_1 = require("./order-template/order-template.module");
const files_module_1 = require("./files/files.module");
const order_requirement_module_1 = require("./order-requirement/order-requirement.module");
const order_faq_module_1 = require("./order-faq/order-faq.module");
const favorites_module_1 = require("./favorites/favorites.module");
const blog_module_1 = require("./blog/blog.module");
const comments_module_1 = require("./comments/comments.module");
const complaints_module_1 = require("./complaints/complaints.module");
const home_faq_module_1 = require("./home-faq/home-faq.module");
const reference_module_1 = require("./reference/reference.module");
const notifications_module_1 = require("./notifications/notifications.module");
const banner_module_1 = require("./banner/banner.module");
const faq_image_module_1 = require("./faq-image/faq-image.module");
const sub_category_module_1 = require("./sub-category/sub-category.module");
const rush_order_module_1 = require("./rush-order/rush-order.module");
const commercial_use_module_1 = require("./commercial-use/commercial-use.module");
const private_commission_module_1 = require("./private-commission/private-commission.module");
const gig_faq_module_1 = require("./gig-faq/gig-faq.module");
const gig_requirement_module_1 = require("./gig-requirement/gig-requirement.module");
const gig_gallery_module_1 = require("./gig-gallery/gig-gallery.module");
const gig_video_module_1 = require("./gig-video/gig-video.module");
const models_service_1 = require("./models/models.service");
const order_feedback_module_1 = require("./order-feedback/order-feedback.module");
const pusher_service_1 = require("./pusher/pusher.service");
const config_1 = require("@nestjs/config");
const config_2 = require("./config");
const database_config_1 = require("./database.config");
const transaction_module_1 = require("./transaction/transaction.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            employee_module_1.EmployeeModule,
            graphql_1.GraphQLModule.forRoot({
                cors: {
                    origin: '*',
                    credentials: true,
                },
                driver: apollo_1.ApolloDriver,
                debug: true,
                playground: true,
                autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/graphql-schema.gql'),
                installSubscriptionHandlers: true,
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useClass: database_config_1.DatabaseConfig,
            }),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [config_2.config],
                ignoreEnvFile: true,
            }),
            project_module_1.ProjectModule,
            users_module_1.UsersModule,
            profile_module_1.ProfileModule,
            gig_module_1.GigModule,
            order_module_1.OrderModule,
            home_module_1.HomeModule,
            categories_module_1.CategoriesModule,
            headers_module_1.HeadersModule,
            menu_module_1.MenuModule,
            submenu_module_1.SubmenuModule,
            footer_module_1.FooterModule,
            featured_module_1.FeaturedModule,
            gigformat_module_1.GigformatModule,
            gig_tags_module_1.GigTagsModule,
            rating_module_1.RatingModule,
            earnings_module_1.EarningsModule,
            chats_module_1.ChatsModule,
            messages_module_1.MessagesModule,
            social_media_module_1.SocialMediaModule,
            order_template_module_1.OrderTemplateModule,
            files_module_1.FilesModule,
            order_requirement_module_1.OrderRequirementModule,
            order_faq_module_1.OrderFaqModule,
            favorites_module_1.FavoritesModule,
            blog_module_1.BlogModule,
            comments_module_1.CommentsModule,
            complaints_module_1.ComplaintsModule,
            home_faq_module_1.HomeFaqModule,
            reference_module_1.ReferenceModule,
            notifications_module_1.NotificationsModule,
            banner_module_1.BannerModule,
            faq_image_module_1.FaqImageModule,
            sub_category_module_1.SubCategoryModule,
            rush_order_module_1.RushOrderModule,
            commercial_use_module_1.CommercialUseModule,
            private_commission_module_1.PrivateCommissionModule,
            gig_faq_module_1.GigFaqModule,
            gig_requirement_module_1.GigRequirementModule,
            gig_gallery_module_1.GigGalleryModule,
            gig_video_module_1.GigVideoModule,
            order_feedback_module_1.OrderFeedbackModule,
            transaction_module_1.TransactionModule,
        ],
        controllers: [],
        providers: [models_service_1.ModelsService, pusher_service_1.PusherService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map