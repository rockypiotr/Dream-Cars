import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {CreateRoutingModule} from './create-routing.module';
import {CreatePageComponent} from "./create-page/create-page.component";
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [CreatePageComponent],
  imports: [
    CommonModule,
    SharedModule,
    CreateRoutingModule
  ]
})
export class CreateModule {
}
