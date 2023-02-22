import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {SearchRoutingModule} from './search-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {SearchPageComponent} from "./search-page/search-page.component";
import {SearchItemComponent} from './search-page/search-item/search-item.component';
import {MatCardModule} from "@angular/material/card";
import {AuctionService} from "../../core/services/auction.service";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { RemoveButtonComponent } from './search-page/search-item/action-button-list/remove-button/remove-button.component';
import { ActionButtonListComponent } from './search-page/search-item/action-button-list/action-button-list.component';
import { DownloadButtonComponent } from './search-page/search-item/action-button-list/download-button/download-button.component';
import { FavouriteButtonComponent } from './search-page/search-item/action-button-list/favourite-button/favourite-button.component';

@NgModule({
  declarations: [SearchPageComponent, SearchItemComponent, RemoveButtonComponent, ActionButtonListComponent, DownloadButtonComponent, FavouriteButtonComponent],
  imports: [
    CommonModule,
    SharedModule,
    SearchRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    AuctionService
  ]

})
export class SearchModule {
}
