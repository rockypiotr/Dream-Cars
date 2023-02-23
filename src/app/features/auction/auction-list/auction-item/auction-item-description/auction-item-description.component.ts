import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-auction-item-description',
  templateUrl: './auction-item-description.component.html',
  styleUrls: ['./auction-item-description.component.scss'],
})
export class AuctionItemDescriptionComponent implements OnInit {
  @Input() auction: any;

  constructor() {}

  ngOnInit(): void {}
}
