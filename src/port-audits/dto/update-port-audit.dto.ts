import { PartialType } from '@nestjs/swagger';
import { CreatePortAuditDto } from './create-port-audit.dto';

export class UpdatePortAuditDto extends PartialType(CreatePortAuditDto) {}
