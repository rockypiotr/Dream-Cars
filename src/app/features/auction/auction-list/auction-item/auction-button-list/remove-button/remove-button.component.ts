import { Component, Input, OnInit } from '@angular/core';
import { AuctionService } from '../../../../../../core/services/auction.service';

@Component({
  selector: 'app-remove-button',
  templateUrl: './remove-button.component.html',
  styleUrls: ['./remove-button.component.scss'],
})
export class RemoveButtonComponent implements OnInit {
  @Input() auctionID: string = '';

  constructor(private _auction: AuctionService) {}

  ngOnInit(): void {}

  deleteAuction() {
    if (confirm('Czy na pewno chcesz usunąć aukcje?'))
      this._auction.deleteById(this.auctionID);
  }
}
