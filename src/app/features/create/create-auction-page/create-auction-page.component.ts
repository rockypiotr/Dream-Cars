import { Component } from '@angular/core';
import { Auction } from '../../../model/auction';
import { GearboxEnum } from '../../../enums/GearboxEnum';
import { ColorsEnum } from '../../../enums/ColorsEnum';
import { DriveSystemsEnum } from '../../../enums/DriveSystemsEnum';
import { ColorTypesEnum } from '../../../enums/ColorTypesEnum';
import { TypesEnum } from '../../../enums/TypesEnum';
import { AuctionService } from '../../../core/services/auction.service';
import { Router } from '@angular/router';
import { SnackBarService } from '../../../core/services/snackBar.service';

@Component({
  selector: 'app-create-auction-page',
  templateUrl: './create-auction-page.component.html',
  styleUrls: ['./create-auction-page.component.scss'],
})
export class CreateAuctionPageComponent {
  auctionData: Auction = {
    ID: '',
    VIN: '',
    brand: '',
    model: '',
    type: <TypesEnum>{},
    color: <ColorsEnum>{},
    color_type: <ColorTypesEnum>{},
    drive_system: <DriveSystemsEnum>{},
    engine_capacity: 0,
    engine_power: 0,
    gearbox: <GearboxEnum>{},
    price: 0,
    production_year: 0,
    registration_number: '',
  };
  vehicleBrands = [
    {
      code: 'TOY',
      name: 'Toyota',
      models: [
        { code: 'CAM', name: 'Camry' },
        { code: 'COR', name: 'Corolla' },
        { code: 'RAV', name: 'Rav4' },
        { code: 'HIG', name: 'Highlander' },
        { code: 'PRI', name: 'Prius' },
      ],
    },
    {
      code: 'FOR',
      name: 'Ford',
      models: [
        { code: 'FIE', name: 'Fiesta' },
        { code: 'FOC', name: 'Focus' },
        { code: 'MUS', name: 'Mustang' },
        { code: 'EXP', name: 'Explorer' },
        { code: 'F15', name: 'F-150' },
      ],
    },
    {
      code: 'CHE',
      name: 'Chevrolet',
      models: [
        { code: 'MAL', name: 'Malibu' },
        { code: 'CRU', name: 'Cruze' },
        { code: 'EQU', name: 'Equinox' },
        { code: 'TRA', name: 'Traverse' },
        { code: 'SIL', name: 'Silverado' },
      ],
    },
    {
      code: 'HON',
      name: 'Honda',
      models: [
        { code: 'CIV', name: 'Civic' },
        { code: 'ACC', name: 'Accord' },
        { code: 'CRV', name: 'CR-V' },
        { code: 'ODY', name: 'Odyssey' },
        { code: 'FIT', name: 'Fit' },
      ],
    },
    {
      code: 'NIS',
      name: 'Nissan',
      models: [
        { code: 'ALT', name: 'Altima' },
        { code: 'SEN', name: 'Sentra' },
        { code: 'VER', name: 'Versa' },
        { code: 'ROG', name: 'Rogue' },
        { code: 'MAX', name: 'Maxima' },
      ],
    },
  ];
  availableModels: { code: string; name: string }[] = [];
  vehicleTypes = Object.values(TypesEnum);
  vehicleGearbox = Object.values(GearboxEnum);
  vehicleDriveSystems = Object.values(DriveSystemsEnum);
  vehicleColors = Object.values(ColorsEnum);
  vehicleColorTypes = Object.values(ColorTypesEnum);

  constructor(
    private _auction: AuctionService,
    private _router: Router,
    private _snackBar: SnackBarService
  ) {}

  onBrandChange() {
    this.availableModels = this.vehicleBrands.find(
      (vehicleModel) => vehicleModel.name === this.auctionData.brand
    )!.models;
  }

  createAuction() {
    this._auction.create(this.auctionData);
    this._router.navigate(['search']).then(() => {
      this._snackBar.openSnackBar(
        'Pomyślnie utworzono aukcje!',
        'OK',
        'center',
        'top',
        5000
      );
    });
  }
}
