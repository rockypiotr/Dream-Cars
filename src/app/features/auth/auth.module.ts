import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginComponent} from './login/login.component';
import {PasswordResetComponent} from './password-reset/password-reset.component';
import {PasswordResetRequestComponent} from './password-reset-request/password-reset-request.component';
import {SharedModule} from "../../shared/shared.module";
import {AuthRoutingModule} from "./auth-routing.module";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {AuthService} from "../../core/services/auth.service";
import { RegisterComponent } from './register/register.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";

@NgModule({
  declarations: [
    LoginComponent,
    PasswordResetComponent,
    PasswordResetRequestComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatProgressBarModule,
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule {
}
