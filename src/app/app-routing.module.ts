import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'reservation-list', component: ReservationListComponent },
  { path: 'reservation-new', component: ReservationFormComponent },
  { path: 'reservation-edit/:id', component: ReservationFormComponent }, // Here /:id is also used, cuz we are editing a specific reservation
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
