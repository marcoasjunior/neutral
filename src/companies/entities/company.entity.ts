import { prop } from "@typegoose/typegoose";
import { IsEmail, IsString } from "class-validator";

export class Company {

    @IsString()
    @prop({ required: true, trim: true })
    name: string

    @IsEmail()
    @prop({ required: true, trim: true, unique: true})
    email: string

    @IsString()
    @prop({ required: true, trim: true })
    contact: string
    
    @IsString()
    @prop({ trim: true })
    address: string

    @IsString()
    @prop({ trim: true })
    cnpj: string

    @IsString()
    @prop({ trim: true })
    logo: string

}
