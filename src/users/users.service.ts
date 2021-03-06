import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

    constructor(
        @InjectModel(User) private readonly userModel: ReturnModelType < typeof User >
    ) {}

    async create(createUserDto: CreateUserDto) {

        return await this.userModel.create(createUserDto)

    }

    async findAll(filter = {}) {

        return await this.userModel.find(filter)

    }

    async findOne(id: string) {

        return await this.userModel.findById(id)

    }

    async update(id: string, updateUserDto: UpdateUserDto) {

        return await this.userModel.findByIdAndUpdate(id, updateUserDto)

    }

    async remove(id: string) {

        return await this.userModel.findByIdAndRemove(id)

    }
}