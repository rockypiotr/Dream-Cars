import {Component, OnInit} from '@angular/core';
import {SearchItemService} from "../../../../core/services/search-item.service";
import {Auction} from "../../../../model/auction";

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {
  auctionsList: Auction[] = [];
  id: string = '';

  constructor(private searchData: SearchItemService) { }

  ngOnInit(): void {
    this.searchData.getItems().subscribe(res => {
      this.auctionsList = res.map((e: any) => {
        return e.payload.doc.data();
      }, (err: any) => {
        console.error(err);
        alert('Error while fetching auctions data');
      })
    })
  }

  deleteItem() {
    alert("Usuwanie rekordu nie jest teraz możliwe");
  }

  addToFavourite() {
    alert("Dodanie rekordu do ulubionych nie jest teraz możliwe");

  }

  downloadItem() {
    alert("Pobranie rekordu nie jest teraz możliwe");

  }
}
