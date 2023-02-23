import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-auction-item',
  templateUrl: './auction-item.component.html',
  styleUrls: ['./auction-item.scss'],
})
export class AuctionItem implements OnInit {
  @Input() auction: any;

  constructor() {}

  ngOnInit() {}
}
