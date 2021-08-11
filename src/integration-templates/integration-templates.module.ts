import { Module } from '@nestjs/common';
import { IntegrationTemplatesService } from './integration-templates.service';
import { IntegrationTemplatesController } from './integration-templates.controller';

@Module({
  controllers: [IntegrationTemplatesController],
  providers: [IntegrationTemplatesService]
})
export class IntegrationTemplatesModule {}
