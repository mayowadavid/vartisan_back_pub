import { Module } from '@nestjs/common';
import { SubmenuService } from './submenu.service';
import { SubmenuResolver } from './submenu.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Submenu } from './entities/submenu.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Submenu])],
  providers: [SubmenuResolver, SubmenuService],
})
export class SubmenuModule {}
