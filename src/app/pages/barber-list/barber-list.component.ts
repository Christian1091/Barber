import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Barber } from '../../models/barber.model';
import { BarberService } from '../../services/barber.service';

@Component({
  selector: 'app-barber-list',
  templateUrl: './barber-list.component.html',
  styleUrl: './barber-list.component.css',
})
export class BarberListComponent implements OnInit {
  barbers: Barber[] = [];
  @Output() selectBarber = new EventEmitter<Barber>();

  constructor(private barberService: BarberService) {}

  ngOnInit() {
    this.barberService.getBarbers().subscribe((data) => (this.barbers = data));
  }

  onSelect(barber: Barber) {
    this.selectBarber.emit(barber);
  }
}
