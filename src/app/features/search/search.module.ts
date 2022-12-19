import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {SearchRoutingModule} from './search-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {SearchPageComponent} from "./search-page/search-page.component";

@NgModule({
  declarations: [SearchPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    SearchRoutingModule
  ]
})
export class SearchModule {
}
