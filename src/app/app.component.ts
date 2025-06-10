import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  barbers = [
    { id: '1', name: 'Barbero 1' },
    { id: '2', name: 'Barbero 2' },
    { id: '3', name: 'Barbero 3' },
    { id: '4', name: 'Barbero 4' },
    { id: '5', name: 'Barbero 5' },
  ];

  selectedBarber: any = null;

  // Aquí guardaremos todas las reservas por barbero
  existingBookings: { [barberId: string]: string[] } = {};

  openBooking(barber: any): void {
    this.selectedBarber = barber;
  }

  closeBooking(): void {
    this.selectedBarber = null;
  }

  addBooking(event: { barberId: string, slot: string }): void {
    if (!this.existingBookings[event.barberId]) {
      this.existingBookings[event.barberId] = [];
    }
    this.existingBookings[event.barberId].push(event.slot);
    console.log('Reservas actualizadas:', this.existingBookings);
  }
}
