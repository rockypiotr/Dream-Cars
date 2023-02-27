import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRoutingModule } from './create-routing.module';
import { CreateAuctionPageComponent } from './create-auction-page/create-auction-page.component';
import { SharedModule } from '../../shared/shared.module';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { SnackBarService } from '../../core/services/snackBar.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AuctionService } from '../../core/services/auction.service';

@NgModule({
  declarations: [CreateAuctionPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    CreateRoutingModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    FormsModule,
    MatButtonModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatSnackBarModule,
  ],
  providers: [SnackBarService, AuctionService],
})
export class CreateModule {}
