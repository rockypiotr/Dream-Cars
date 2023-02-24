import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuctionRoutingModule } from './auction-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { AuctionListComponent } from './auction-list/auction-list.component';
import { AuctionItem } from './auction-list/auction-item/auction-item';
import { MatCardModule } from '@angular/material/card';
import { AuctionService } from '../../core/services/auction.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RemoveButtonComponent } from './auction-list/auction-item/auction-button-list/remove-button/remove-button.component';
import { AuctionButtonListComponent } from './auction-list/auction-item/auction-button-list/auction-button-list.component';
import { DownloadButtonComponent } from './auction-list/auction-item/auction-button-list/download-button/download-button.component';
import { FavouriteButtonComponent } from './auction-list/auction-item/auction-button-list/favourite-button/favourite-button.component';
import { AuctionItemDescriptionComponent } from './auction-list/auction-item/auction-item-description/auction-item-description.component';
import { AuctionThumbnailComponent } from './auction-list/auction-item/auction-thumbnail/auction-thumbnail.component';

@NgModule({
  declarations: [
    AuctionListComponent,
    AuctionItem,
    RemoveButtonComponent,
    AuctionButtonListComponent,
    DownloadButtonComponent,
    FavouriteButtonComponent,
    AuctionItemDescriptionComponent,
    AuctionThumbnailComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuctionRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [AuctionService],
})
export class AuctionModule {}
