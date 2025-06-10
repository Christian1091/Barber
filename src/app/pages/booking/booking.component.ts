import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BarberService } from '../../services/barber.service';
import { Barber } from '../../models/barber.model';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css',
})
export class BookingComponent {
  @Input() selectedBarber: any;
  @Input() existingBookings: { [key: string]: string[] } = {};
  @Output() closePopup = new EventEmitter<void>();
  @Output() bookingConfirmed = new EventEmitter<{
    barberId: string;
    slot: string;
  }>();

  days: string[] = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sab'];
  hours: string[] = [
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
  ];

  selectedSlot: { day: string; hour: string } | null = null;

  getSlotClass(day: string, hour: string): string {
    if (this.isBooked(day, hour)) return 'unavailable';
    if (this.selectedSlot?.day === day && this.selectedSlot?.hour === hour)
      return 'selected';
    return 'available';
  }

  toggleSlot(day: string, hour: string): void {
    if (this.isBooked(day, hour)) return;
    if (this.selectedSlot?.day === day && this.selectedSlot?.hour === hour) {
      this.selectedSlot = null;
    } else {
      this.selectedSlot = { day, hour };
    }
  }

  isBooked(day: string, hour: string): boolean {
    const bookings = this.existingBookings[this.selectedBarber?.id] || [];
    return bookings.includes(`${day}-${hour}`);
  }

  getSlotText(day: string, hour: string): string {
    return this.isBooked(day, hour)
      ? 'Ocupado'
      : this.selectedSlot?.day === day && this.selectedSlot?.hour === hour
      ? 'Seleccionado'
      : '';
  }

  confirmBooking(): void {
    if (this.selectedSlot) {
      const slotKey = `${this.selectedSlot.day}-${this.selectedSlot.hour}`;
      this.bookingConfirmed.emit({
        barberId: this.selectedBarber.id,
        slot: slotKey,
      });
      this.close();
    }
  }

  close(): void {
    this.closePopup.emit();
  }
}
