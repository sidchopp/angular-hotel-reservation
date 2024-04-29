import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReservationFormComponent } from '../reservation-form/reservation-form.component';
import { ReservationListComponent } from '../reservation-list/reservation-list.component';

@NgModule({
  declarations: [ReservationFormComponent, ReservationListComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
})
export class ReservationModule {}
