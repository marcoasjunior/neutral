import { prop } from "@typegoose/typegoose";
import { IsEmail, IsString } from "class-validator";


export class User {

    @IsString()
    @prop({ required: true, trim: true })
    name: string

    @IsEmail()
    @prop({ required: true, trim: true, unique: true})
    email: string

    @IsString()
    @prop({ required: true, trim: true })
    contact: string

}

export const UserSchemaOptions = {
    typegooseClass: User,
    schemaOptions: {
        timestamps: true,
    }
}
