import { prop } from "@typegoose/typegoose";
import { IsEmail, IsString } from "class-validator";

export class User {

    @IsString()
    @prop({ required: true, trim: true})
    name: string

    @IsEmail()
    @prop()
    email: string

    @prop()
    contact: string

}
