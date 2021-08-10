import { Injectable } from '@nestjs/common';
import { CreatePendencyDto } from './dto/create-pendency.dto';
import { UpdatePendencyDto } from './dto/update-pendency.dto';

@Injectable()
export class PendenciesService {
  create(createPendencyDto: CreatePendencyDto) {
    return 'This action adds a new pendency';
  }

  findAll() {
    return `This action returns all pendencies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pendency`;
  }

  update(id: number, updatePendencyDto: UpdatePendencyDto) {
    return `This action updates a #${id} pendency`;
  }

  remove(id: number) {
    return `This action removes a #${id} pendency`;
  }
}
