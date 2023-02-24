import {Component, Input, OnInit} from '@angular/core';
import {AuctionService} from "../../../../../../core/services/auction.service";

@Component({
  selector: 'app-remove-button',
  templateUrl: './remove-button.component.html',
  styleUrls: ['./remove-button.component.scss']
})
export class RemoveButtonComponent implements OnInit {
  @Input() auctionID: string = '';

  constructor(private auction: AuctionService) {
  }

  ngOnInit(): void {
  }

  onRemove() {
    if (confirm("Czy na pewno chcesz usunąć aukcje?"))
      this.auction.deleteById(this.auctionID);
  }
}
