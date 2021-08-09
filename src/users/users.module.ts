import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { UserSchemaOptions } from './entities/user.entity';

@Module({
    imports: [TypegooseModule.forFeature([UserSchemaOptions])],
    controllers: [UsersController],
    providers: [UsersService]
})

export class UsersModule {}