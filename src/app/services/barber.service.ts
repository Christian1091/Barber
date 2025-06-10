import { Injectable } from '@angular/core';
import { Barber } from '../models/barber.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BarberService {
  constructor() {}

  private barbers: Barber[] = [
    {
      id: 1,
      name: 'Carlos',
      photo: 'assets/carlos.jpg',
      agenda: [{ date: '2025-06-01', time: '10:00' }],
    },
    {
      id: 2,
      name: 'Luis',
      photo: 'assets/luis.jpg',
      agenda: [{ date: '2025-06-01', time: '11:00' }],
    },
    {
      id: 3,
      name: 'Jorge',
      photo: 'assets/jorge.jpg',
      agenda: [{ date: '2025-06-01', time: '12:00' }],
    },
    {
      id: 4,
      name: 'Miguel',
      photo: 'assets/miguel.jpg',
      agenda: [{ date: '2025-06-01', time: '13:00' }],
    },
    {
      id: 5,
      name: 'Andrés',
      photo: 'assets/andres.jpg',
      agenda: [{ date: '2025-06-01', time: '14:00' }],
    },
  ];

  private barbersSubject = new BehaviorSubject<Barber[]>(this.barbers);

  getBarbers(): Observable<Barber[]> {
    return this.barbersSubject.asObservable();
  }

  addAppointment(barberId: number, date: string, time: string) {
    const barber = this.barbers.find((b) => b.id === barberId);
    if (barber) {
      barber.agenda.push({ date, time });
      this.barbersSubject.next(this.barbers);
    }
  }
}
