import { Module } from '@nestjs/common';
import { GigformatService } from './gigformat.service';
import { GigformatResolver } from './gigformat.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gigformat } from './entities/gigformat.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Gigformat])],
  providers: [GigformatResolver, GigformatService],
})
export class GigformatModule {}
