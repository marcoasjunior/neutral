import { prop } from "@typegoose/typegoose"
import { IsEmail, IsString } from "class-validator"

export class Client {

    @IsString()
    @prop({ required: true, trim: true })
    name: string

    @IsEmail()
    @prop({ trim: true })
    email: string

    @IsString()
    @prop({ required: true, trim: true })
    contact: string

}
