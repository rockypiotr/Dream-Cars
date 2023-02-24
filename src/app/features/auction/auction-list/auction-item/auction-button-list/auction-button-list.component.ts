import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-auction-button-list',
  templateUrl: './auction-button-list.component.html',
  styleUrls: ['./auction-button-list.component.scss'],
})
export class AuctionButtonListComponent implements OnInit {
  @Input() auction: any;
  constructor() {}

  ngOnInit(): void {}
}
