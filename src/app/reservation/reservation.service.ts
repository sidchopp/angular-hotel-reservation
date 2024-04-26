import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private reservations: Reservation[] = [];

  // load constructor before invoking onInit lifecycle hook
  constructor() {
    let savedReservations = localStorage.getItem('reservations');

    // if key ( reservations) is there, than convert JSON string into a JavaScript object or gives an empty array
    this.reservations = savedReservations ? JSON.parse(savedReservations) : [];
  }

  //CRUD
  getReservations(): Reservation[] {
    return this.reservations;
  }

  getReservation(id: string): Reservation | undefined {
    return this.reservations.find((res) => res.id === id);
  }

  addReservation(reservation: Reservation): void {
    this.reservations.push(reservation);
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }

  deleteReservation(id: string): void {
    let index = this.reservations.findIndex((res) => res.id === id);
    this.reservations.splice(index, 1);
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }

  updateReservation(updatedReservation: Reservation): void {
    let index = this.reservations.findIndex(
      (res) => res.id === updatedReservation.id
    );
    this.reservations[index] = updatedReservation;
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }
}
