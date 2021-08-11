import { Injectable } from '@nestjs/common';
import { CreateIspDto } from './dto/create-isp.dto';
import { UpdateIspDto } from './dto/update-isp.dto';

@Injectable()
export class IspsService {
  create(createIspDto: CreateIspDto) {
    return 'This action adds a new isp';
  }

  findAll() {
    return `This action returns all isps`;
  }

  findOne(id: number) {
    return `This action returns a #${id} isp`;
  }

  update(id: number, updateIspDto: UpdateIspDto) {
    return `This action updates a #${id} isp`;
  }

  remove(id: number) {
    return `This action removes a #${id} isp`;
  }
}
