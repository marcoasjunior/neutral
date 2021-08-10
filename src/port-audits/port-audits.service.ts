import { Injectable } from '@nestjs/common';
import { CreatePortAuditDto } from './dto/create-port-audit.dto';
import { UpdatePortAuditDto } from './dto/update-port-audit.dto';

@Injectable()
export class PortAuditsService {
  create(createPortAuditDto: CreatePortAuditDto) {
    return 'This action adds a new portAudit';
  }

  findAll() {
    return `This action returns all portAudits`;
  }

  findOne(id: number) {
    return `This action returns a #${id} portAudit`;
  }

  update(id: number, updatePortAuditDto: UpdatePortAuditDto) {
    return `This action updates a #${id} portAudit`;
  }

  remove(id: number) {
    return `This action removes a #${id} portAudit`;
  }
}
