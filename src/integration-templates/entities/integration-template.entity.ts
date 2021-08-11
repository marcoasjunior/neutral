import { prop } from "@typegoose/typegoose"
import { IsObject, IsString } from "class-validator"

export class IntegrationTemplate {

    @IsString()
    @prop({ required: true, trim: true })
    name: string

    @IsString()
    @prop({ trim: true })
    urlDocs: string

    @IsString()
    @prop({ trim: true })
    logo: string
    
    @IsObject()
    @prop()
    configs: Record<string, unknown>


}
