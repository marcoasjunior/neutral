import { PartialType } from '@nestjs/swagger';
import { CreatePendencyDto } from './create-pendency.dto';

export class UpdatePendencyDto extends PartialType(CreatePendencyDto) {}
