import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Auction} from "../../../model/auction";
import {GearboxEnum} from "../../../enums/GearboxEnum";
import {ColorsEnum} from "../../../enums/ColorsEnum";
import {DriveSystemsEnum} from "../../../enums/DriveSystemsEnum";
import {ColorTypesEnum} from "../../../enums/ColorTypesEnum";
import {TypesEnum} from "../../../enums/TypesEnum";
import { v4 as uuidv4 } from "uuid";
@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss'],
})

export class CreatePageComponent implements OnInit {
  auctionData: Auction = {
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
    registration_number: ''
  }
  selectedBrand: string = '';
  selectedModel: string = '';
  availableModels: { code: string; name: string; }[] = [];
  selectedType: string = '';
  vehicleProductionYear: number = 0;
  vehicleVIN: string = '';
  registrationNumber: string = '';
  engineCapacity: number = 0;
  enginePower: number = 0;
  selectedGearbox: string = '';
  selectedDriveSystem: string = '';
  selectedColor: string = '';
  selectedColorType: string = '';
  vehiclePrice: number = 0;

  vehicleBrands = [{
    code: 'TOY',
    name: 'Toyota',
    models: [
      {code: 'CAM', name: 'Camry'},
      {code: 'COR', name: 'Corolla'},
      {code: 'RAV', name: 'Rav4'},
      {code: 'HIG', name: 'Highlander'},
      {code: 'PRI', name: 'Prius'}
    ]
  },
    {
      code: 'FOR',
      name: 'Ford',
      models: [
        {code: 'FIE', name: 'Fiesta'},
        {code: 'FOC', name: 'Focus'},
        {code: 'MUS', name: 'Mustang'},
        {code: 'EXP', name: 'Explorer'},
        {code: 'F15', name: 'F-150'}
      ]
    },
    {
      code: 'CHE',
      name: 'Chevrolet',
      models: [
        {code: 'MAL', name: 'Malibu'},
        {code: 'CRU', name: 'Cruze'},
        {code: 'EQU', name: 'Equinox'},
        {code: 'TRA', name: 'Traverse'},
        {code: 'SIL', name: 'Silverado'}
      ]
    },
    {
      code: 'HON',
      name: 'Honda',
      models: [
        {code: 'CIV', name: 'Civic'},
        {code: 'ACC', name: 'Accord'},
        {code: 'CRV', name: 'CR-V'},
        {code: 'ODY', name: 'Odyssey'},
        {code: 'FIT', name: 'Fit'}
      ]
    },
    {
      code: 'NIS',
      name: 'Nissan',
      models: [
        {code: 'ALT', name: 'Altima'},
        {code: 'SEN', name: 'Sentra'},
        {code: 'VER', name: 'Versa'},
        {code: 'ROG', name: 'Rogue'},
        {code: 'MAX', name: 'Maxima'}
      ]
    }
  ];

  vehicleTypes = Object.values(TypesEnum);
  vehicleGearbox = Object.values(GearboxEnum);
  vehicleDriveSystems = Object.values(DriveSystemsEnum);
  vehicleColors = Object.values(ColorsEnum);
  vehicleColorTypes = Object.values(ColorTypesEnum);

  constructor(private firestore: AngularFirestore) {
  }

  onBrandChange() {
    this.availableModels = this.vehicleBrands.find(b => b.code === this.selectedBrand)!.models;
  }

  resetForm() {
    this.selectedBrand = '';
    this.selectedModel = '';
    this.selectedType = <TypesEnum>{};
    this.vehicleProductionYear = 0;
    this.vehicleVIN = '';
    this.registrationNumber = '';
    this.engineCapacity = 0;
    this.enginePower = 0;
    this.selectedGearbox = <GearboxEnum>{};
    this.selectedDriveSystem = <DriveSystemsEnum>{};
    this.selectedColor = <ColorsEnum>{};
    this.selectedColorType = <ColorTypesEnum>{};
    this.vehiclePrice = 0;
  }

  addAuction() {
    this.auctionData.ID = uuidv4();
    this.auctionData.brand = this.selectedBrand;
    this.auctionData.model = this.selectedModel;
    this.auctionData.type = <TypesEnum>this.selectedType
    this.auctionData.production_year = this.vehicleProductionYear;
    this.auctionData.VIN = this.vehicleVIN;
    this.auctionData.registration_number = this.registrationNumber;
    this.auctionData.engine_capacity = this.engineCapacity;
    this.auctionData.engine_power = this.enginePower;
    this.auctionData.gearbox = <GearboxEnum>this.selectedGearbox;
    this.auctionData.drive_system = <DriveSystemsEnum>this.selectedDriveSystem;
    this.auctionData.color = <ColorsEnum>this.selectedColor;
    this.auctionData.color_type = <ColorTypesEnum>this.selectedColorType;
    this.auctionData.price = this.vehiclePrice;

    this.firestore.collection('/T_Auction').add(this.auctionData)
      .then(() => {
        this.resetForm();
        console.log('Successfully added auction');
      })
      .catch((error) => {
        console.error("Error adding auction: ", error);
      })
  }

  ngOnInit(): void {
  }
}
