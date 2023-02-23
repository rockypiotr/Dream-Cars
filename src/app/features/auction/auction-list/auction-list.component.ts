import { Component, OnInit } from '@angular/core';
import { Auction } from '../../../model/auction';
import { AuctionService } from '../../../core/services/auction.service';

@Component({
  selector: 'app-auction-page',
  templateUrl: './auction-list.component.html',
  styleUrls: ['./auction-list.component.scss'],
})
export class AuctionListComponent implements OnInit {
  auctionsList: Auction[] = [];

  constructor(private searchData: AuctionService) {}

  ngOnInit(): void {
    this.searchData.getItems().subscribe((res) => {
      this.auctionsList = res.map(
        (e: any) => {
          return e.payload.doc.data();
        },
        (err: any) => {
          console.error(err);
          alert('Error while fetching auctions data');
        }
      );
    });
  }
}
