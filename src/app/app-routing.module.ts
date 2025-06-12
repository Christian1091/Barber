import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { HomeComponent } from './pages/home/home.component';
import { AgendarComponent } from './pages/agendar/agendar.component';

const routes: Routes = [
 { path: '', component: HomeComponent }, 
  { path: 'acerca-de', component: AcercaDeComponent }, 
  { path: 'contacto', component: ContactoComponent },   
  { path: 'agendar', component: AgendarComponent },   
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
