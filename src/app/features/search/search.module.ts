import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {SearchRoutingModule} from './search-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {SearchPageComponent} from "./search-page/search-page.component";
import {SearchItemComponent} from './search-page/search-item/search-item.component';
import {MatCardModule} from "@angular/material/card";
import {SearchItemService} from "../../core/services/search-item.service";

@NgModule({
  declarations: [SearchPageComponent, SearchItemComponent],
  imports: [
    CommonModule,
    SharedModule,
    SearchRoutingModule,
    MatCardModule
  ],
  providers: [
    SearchItemService
  ]

})
export class SearchModule {
}
