import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-download-button',
  templateUrl: './download-button.component.html',
  styleUrls: ['./download-button.component.scss']
})
export class DownloadButtonComponent implements OnInit {
  @Input() auctionID: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  onDownload() {
    alert("Pobranie rekordu nie jest teraz możliwe");
  }
}
