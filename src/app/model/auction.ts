import {GearboxEnum} from "../enums/GearboxEnum";
import {DriveSystemsEnum} from "../enums/DriveSystemsEnum";
import {ColorTypesEnum} from "../enums/ColorTypesEnum";
import {ColorsEnum} from "../enums/ColorsEnum";
import {TypesEnum} from "../enums/TypesEnum";

export interface Auction {
  ID: string;
  VIN: string;
  brand: string;
  model: string;
  type: TypesEnum;
  color: ColorsEnum;
  color_type: ColorTypesEnum;
  drive_system: DriveSystemsEnum;
  engine_capacity: number;
  engine_power: number;
  gearbox: GearboxEnum;
  price: number;
  production_year: number;
  registration_number: string;
}
