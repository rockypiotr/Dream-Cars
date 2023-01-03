import {Component, OnInit} from '@angular/core';
import {AuctionService} from "../../../../core/services/auction.service";
import {Auction} from "../../../../model/auction";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {
  auctionsList: Auction[] = [];
  id: string = '';

  constructor(private searchData: AuctionService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.searchData.getItems().subscribe(res => {
      this.auctionsList = res.map((e: any) => {
        console.log(e.payload.doc.data());
        return e.payload.doc.data();
      }, (err: any) => {
        console.error(err);
        alert('Error while fetching auctions data');
      })
    })
  }

  onRemove(auctionID: string) {
    if (confirm("Czy na pewno chcesz usunąć aukcje?"))
      this.searchData.deleteAuctionById(auctionID);
  }

  addToFavourite(auctionID: string) {
    alert("Dodanie rekordu do ulubionych nie jest teraz możliwe");
  }

  onDownload(auctionID: string) {
    alert("Pobranie rekordu nie jest teraz możliwe");
  }

}
