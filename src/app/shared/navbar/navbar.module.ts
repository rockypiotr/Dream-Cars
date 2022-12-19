import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatToolbarModule} from "@angular/material/toolbar";
import {NavbarComponent} from "./navbar.component";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {RouterLinkActive, RouterLinkWithHref} from "@angular/router";

@NgModule({
  declarations: [
    NavbarComponent,
  ],
  exports: [
    NavbarComponent
  ],
  imports: [
    MatToolbarModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    RouterLinkWithHref,
    RouterLinkActive,
  ]
})
export class NavbarModule {
}
