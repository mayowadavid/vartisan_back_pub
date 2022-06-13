import { Module } from '@nestjs/common';
import { HomeService } from './home.service';
import { HomeResolver } from './home.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Home } from './entities/home.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Home])],
  providers: [HomeResolver, HomeService],
})
export class HomeModule {}
