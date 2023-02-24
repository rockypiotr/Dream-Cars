import { Component, Input, OnInit } from '@angular/core';
import { Auction } from '../../../../../model/auction';
import { TypesEnum } from '../../../../../enums/TypesEnum';
import { ColorsEnum } from '../../../../../enums/ColorsEnum';
import { ColorTypesEnum } from '../../../../../enums/ColorTypesEnum';
import { DriveSystemsEnum } from '../../../../../enums/DriveSystemsEnum';
import { GearboxEnum } from '../../../../../enums/GearboxEnum';

@Component({
  selector: 'app-auction-item-description',
  templateUrl: './auction-item-description.component.html',
  styleUrls: ['./auction-item-description.component.scss'],
})
export class AuctionItemDescriptionComponent implements OnInit {
  @Input() auction: Auction = {
    ID: '',
    VIN: '',
    brand: '',
    model: '',
    type: <TypesEnum>{},
    color: <ColorsEnum>{},
    color_type: <ColorTypesEnum>{},
    drive_system: <DriveSystemsEnum>{},
    engine_capacity: NaN,
    engine_power: NaN,
    gearbox: <GearboxEnum>{},
    price: NaN,
    production_year: NaN,
    registration_number: '',
  };

  constructor() {}

  ngOnInit(): void {}
}
