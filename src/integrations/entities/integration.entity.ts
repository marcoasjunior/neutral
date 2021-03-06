import { prop } from "@typegoose/typegoose"
import { IsObject, IsString } from "class-validator"

enum STATUS_INTEGRATION {

    SYNCING = 'syncing',
    ACTIVE = 'active',
    DISABLED = 'disabled'

}

export class Integration {

    @IsString()
    @prop({ required: true, trim: true })
    name: string

    @IsString()
    @prop({ required: true, enum: STATUS_INTEGRATION, default: STATUS_INTEGRATION.ACTIVE })
    status: string

    @IsObject()
    @prop()
    configs: Record<string, unknown>

}
