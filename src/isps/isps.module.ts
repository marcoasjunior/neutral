import { Module } from '@nestjs/common';
import { IspsService } from './isps.service';
import { IspsController } from './isps.controller';

@Module({
  controllers: [IspsController],
  providers: [IspsService]
})
export class IspsModule {}
