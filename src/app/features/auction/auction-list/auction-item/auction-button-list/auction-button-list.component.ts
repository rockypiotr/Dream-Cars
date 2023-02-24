import { Component, Input, OnInit } from '@angular/core';
import { Auction } from '../../../../../model/auction';
import { TypesEnum } from '../../../../../enums/TypesEnum';
import { ColorsEnum } from '../../../../../enums/ColorsEnum';
import { ColorTypesEnum } from '../../../../../enums/ColorTypesEnum';
import { DriveSystemsEnum } from '../../../../../enums/DriveSystemsEnum';
import { GearboxEnum } from '../../../../../enums/GearboxEnum';

@Component({
  selector: 'app-auction-button-list',
  templateUrl: './auction-button-list.component.html',
  styleUrls: ['./auction-button-list.component.scss'],
})
export class AuctionButtonListComponent implements OnInit {
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
