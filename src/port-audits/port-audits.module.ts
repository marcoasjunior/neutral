import { Module } from '@nestjs/common';
import { PortAuditsService } from './port-audits.service';
import { PortAuditsController } from './port-audits.controller';

@Module({
  controllers: [PortAuditsController],
  providers: [PortAuditsService]
})
export class PortAuditsModule {}
