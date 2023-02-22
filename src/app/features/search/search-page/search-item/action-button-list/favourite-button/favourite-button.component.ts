import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-favourite-button',
  templateUrl: './favourite-button.component.html',
  styleUrls: ['./favourite-button.component.scss']
})
export class FavouriteButtonComponent implements OnInit {
  @Input() auctionID: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  onFavourite() {
    alert("Dodanie rekordu " + this.auctionID +  " do ulubionych nie jest teraz możliwe");
  }
}
