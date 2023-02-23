import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-button-list',
  templateUrl: './action-button-list.component.html',
  styleUrls: ['./action-button-list.component.scss'],
})
export class ActionButtonListComponent implements OnInit {
  @Input() auction: any;
  constructor() {}

  ngOnInit(): void {}
}
