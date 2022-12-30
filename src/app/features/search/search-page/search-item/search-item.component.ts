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

  constructor(private data: SearchItemService) { }

  ngOnInit(): void {
    this.data.getItems().subscribe(res => {
      this.auctionsList = res.map((e: any) => {
        return e.payload.doc.data();
      }, (err: any) => {
        console.error(err);
        alert('Error while fetching auctions data');
      })
    })
  }
}
