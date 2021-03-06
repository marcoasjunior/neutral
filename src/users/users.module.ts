import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import generateSchemaOptions from 'src/shared/generateSchemaOptions';
import { User } from './entities/user.entity';

@Module({
    imports: [TypegooseModule.forFeature([generateSchemaOptions(User)])],
    controllers: [UsersController],
    providers: [UsersService]
})

export class UsersModule {}