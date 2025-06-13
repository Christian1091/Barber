import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarberListComponent } from './pages/barber-list/barber-list.component';
import { BookingComponent } from './pages/booking/booking.component';
import { FormsModule } from '@angular/forms';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { HomeComponent } from './pages/home/home.component';
import { AgendarComponent } from './pages/agendar/agendar.component';

@NgModule({
  declarations: [
    AppComponent,
    BarberListComponent,
    BookingComponent,
    AcercaDeComponent,
    ContactoComponent,
    HomeComponent,
    AgendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
