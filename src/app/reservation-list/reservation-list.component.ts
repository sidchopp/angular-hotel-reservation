import { Component, OnInit } from '@angular/core';
import { ReservationModule } from '../reservation/reservation.module';
import { Reservation } from '../models/reservation';
import { ReservationService } from '../reservation/reservation.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css'],
})
export class ReservationListComponent implements OnInit {
  // Data binding
  reservations: Reservation[] = [];

  // Dependency injection
  constructor(private reservationService: ReservationService) {}

  // On init , the reservations property grabs all the reservations from the service
  ngOnInit(): void {
    this.reservations = this.reservationService.getReservations();
  }

  deleteReservation(id: string) {
    this.reservationService.deleteReservation(id);
  }
}
