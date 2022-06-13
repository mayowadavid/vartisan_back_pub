import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { ProfileService } from 'src/profile/profile.service';
import { Profile } from 'src/profile/entities/profile.entity';
import { ProfileModule } from 'src/profile/profile.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { File } from 'src/files/entities/file.entity';
import { FilesService } from 'src/files/files.service';
import { EarningsModule } from 'src/earnings/earnings.module';
import { EarningsService } from 'src/earnings/earnings.service';
import { Earning } from 'src/earnings/entities/earning.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Profile, File, Earning]),
    ProfileModule,
    EarningsModule,
    PassportModule,
    JwtModule.register({
      secret: 'secretKey',
      signOptions: { expiresIn: '10d' },
    }),
  ],
  providers: [
    UsersResolver,
    UsersService,
    ProfileService,
    EarningsService,
    JwtStrategy,
    FilesService,
  ],
})
export class UsersModule {}
