import { prop } from "@typegoose/typegoose"
import { IsBoolean, IsString } from "class-validator"
import { POLYGON_TYPE, Coordinates } from '../areas.interfaces';


class Polygon {

    @IsString()
    @prop({ required: true, default: POLYGON_TYPE.MULTIPOLYGON })
    type: string;

    @prop()
    coordinates: Array<Array<Array<Coordinates>>>

}

export class Area {

    @IsString()
    @prop({ required: true, trim: true })
    name: string
    
    @prop({ required: true })
    polygon: Polygon

    @IsBoolean()
    @prop({ required: true, default: true })
    active: boolean


}
