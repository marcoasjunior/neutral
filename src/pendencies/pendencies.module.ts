import { Module } from '@nestjs/common';
import { PendenciesService } from './pendencies.service';
import { PendenciesController } from './pendencies.controller';

@Module({
  controllers: [PendenciesController],
  providers: [PendenciesService]
})
export class PendenciesModule {}
