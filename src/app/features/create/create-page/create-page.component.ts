import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Auction} from "../../../model/auction";
import {Vehicle} from "../../../model/vehicle";


@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss'],
})

export class CreatePageComponent implements OnInit {
  auctionData: Auction = {
    VIN: '',
    brand: '',
    model: '',
    type: '',
    color: '',
    color_type: '',
    drive_system: '',
    engine_capacity: 0,
    engine_power: 0,
    gearbox: '',
    price: 0,
    production_year: 0,
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

  vehicleTypes: Vehicle[] = [
    {value: 'sedan', viewValue: 'Sedan'},
    {value: 'kombi', viewValue: 'Kombi'},
    {value: 'hatchback', viewValue: 'Hatchback'},
    {value: 'coupe', viewValue: 'Coupe'},
  ];

  vehicleGearbox: Vehicle[] = [
    {value: 'aut', viewValue: 'Automatyczna'},
    {value: 'man', viewValue: 'Manualna'},
    {value: 'other', viewValue: 'Inna'},
  ]
  vehicleDriveSystems: Vehicle[] = [
    {value: 'RWD', viewValue: 'Na tylne koła'},
    {value: 'FWD', viewValue: 'Na przednie koła'},
    {value: 'AWD', viewValue: '4x4'},
  ]
  vehicleColors: Vehicle[] = [
    {value: 'black', viewValue: 'Czarny'},
    {value: 'white', viewValue: 'Biały'},
  ]
  vehicleColorTypes: Vehicle[] = [
    {value: 'mat', viewValue: 'Matowy'},
    {value: 'metalic', viewValue: 'Metaliczny'},
    {value: 'pearl', viewValue: 'Perłowy'},
  ]

  constructor(private firestore: AngularFirestore) {
  }

  onBrandChange() {
    this.availableModels = this.vehicleBrands.find(b => b.code === this.selectedBrand)!.models;
  }

  resetForm() {
    this.selectedBrand = '';
    this.selectedModel = '';
    this.selectedType = '';
    this.vehicleProductionYear = 0;
    this.vehicleVIN = '';
    this.registrationNumber = '';
    this.engineCapacity = 0;
    this.enginePower = 0;
    this.selectedGearbox = '';
    this.selectedDriveSystem = '';
    this.selectedColor = '';
    this.selectedColorType = '';
    this.vehiclePrice = 0;
  }

  addAuction() {
    try {
      this.auctionData.brand = this.selectedBrand;
      this.auctionData.model = this.selectedModel;
      this.auctionData.type = this.selectedType
      this.auctionData.production_year = this.vehicleProductionYear;
      this.auctionData.VIN = this.vehicleVIN;
      this.auctionData.registration_number = this.registrationNumber;
      this.auctionData.engine_capacity = this.engineCapacity;
      this.auctionData.engine_power = this.enginePower;
      this.auctionData.gearbox = this.selectedGearbox;
      this.auctionData.drive_system = this.selectedDriveSystem;
      this.auctionData.color = this.selectedColor;
      this.auctionData.color_type = this.selectedColorType;
      this.auctionData.price = this.vehiclePrice;

      this.resetForm();

      this.firestore.collection('/T_Auction').add(this.auctionData);
    } catch (e) {
      alert("Technical error");
    }
  }

  ngOnInit(): void {
  }
}
