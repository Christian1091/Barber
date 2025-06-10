export interface Appointment {
  date: string;
  time: string;
}

export interface Barber {
  id: number;
  name: string;
  photo: string;
  agenda: Appointment[];
}
