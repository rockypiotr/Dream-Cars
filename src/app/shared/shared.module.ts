import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from "./layout/layout.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {RouterLinkActive, RouterOutlet} from "@angular/router";
import {FooterComponent} from "./footer/footer.component";
import {NavbarModule} from "./navbar/navbar.module";
import {MatListModule} from "@angular/material/list";


@NgModule({
  declarations: [
    LayoutComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    RouterLinkActive,
    RouterOutlet,
    NavbarModule,
    MatListModule,
  ]
})
export class SharedModule {
}
