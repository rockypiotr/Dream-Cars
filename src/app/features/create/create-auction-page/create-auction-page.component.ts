import { Component, ViewChild } from '@angular/core';
import { Auction } from '../../../model/auction';
import { GearboxEnum } from '../../../enums/GearboxEnum';
import { ColorsEnum } from '../../../enums/ColorsEnum';
import { DriveSystemsEnum } from '../../../enums/DriveSystemsEnum';
import { ColorTypesEnum } from '../../../enums/ColorTypesEnum';
import { TypesEnum } from '../../../enums/TypesEnum';
import { AuctionService } from '../../../core/services/auction.service';
import { Router } from '@angular/router';
import { SnackBarService } from '../../../core/services/snackBar.service';
import { NgForm } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { vehicleBrands } from '../../../core/data/vehicle-brands';

@Component({
  selector: 'app-create-auction-page',
  templateUrl: './create-auction-page.component.html',
  styleUrls: ['./create-auction-page.component.scss'],
})
export class CreateAuctionPageComponent {
  @ViewChild('auctionForm') auctionForm!: NgForm;
  auctionData!: Auction;
  brands = vehicleBrands;
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
    if (this.auctionForm.value.brand) {
      this.availableModels = this.brands.find(
        (vehicleModel) => vehicleModel.name === this.auctionForm.value.brand
      )!.models;
    }
  }

  onReset(form: NgForm) {
    form.reset();
  }

  onSubmit(form: NgForm) {
    this.auctionData = {
      ID: uuidv4(),
      VIN: form.value.VIN,
      brand: form.value.brand,
      model: form.value.model,
      type: form.value.type,
      color: form.value.color,
      color_type: form.value.color_type,
      drive_system: form.value.drive_system,
      engine_capacity: form.value.engine_capacity,
      engine_power: form.value.engine_power,
      gearbox: form.value.gearbox,
      price: form.value.price,
      production_year: form.value.production_year,
      registration_number: form.value.registration_number,
    };
    this._auction.create(this.auctionData);
    this._router.navigate(['search']).then(() => {
      this._snackBar.open(
        'Pomyślnie utworzono aukcje!',
        'OK',
        'center',
        'top',
        5000
      );
    });
  }
}
