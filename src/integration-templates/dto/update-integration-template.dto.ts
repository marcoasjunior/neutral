import { PartialType } from '@nestjs/swagger';
import { CreateIntegrationTemplateDto } from './create-integration-template.dto';

export class UpdateIntegrationTemplateDto extends PartialType(CreateIntegrationTemplateDto) {}
