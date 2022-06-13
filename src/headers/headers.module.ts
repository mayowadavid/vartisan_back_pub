import { Module } from '@nestjs/common';
import { HeadersService } from './headers.service';
import { HeadersResolver } from './headers.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Header } from './entities/header.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Header])],
  providers: [HeadersResolver, HeadersService],
})
export class HeadersModule {}
