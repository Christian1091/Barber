import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   cortes = [
    {
      nombre: 'Fade Clásico',
      descripcion: 'Degradado suave con estilo limpio y elegante.',
      imagen: 'assets/fade-clasico.jpg'
    },
    {
      nombre: 'Pompadour',
      descripcion: 'Volumen en la parte superior con laterales cortos.',
      imagen: 'assets/pompadour.jpg'
    },
    {
      nombre: 'Taper Fade',
      descripcion: 'Transición sutil desde las patillas y nuca hacia arriba.',
      imagen: 'assets/taper-fade.jpg'
    },
    {
      nombre: 'Mohicano',
      descripcion: 'Estilo audaz con centro prominente y lados rapados.',
      imagen: 'assets/mohicano.jpg'
    },
    {
      nombre: 'Corte Militar',
      descripcion: 'Corte muy corto, práctico y varonil.',
      imagen: 'assets/militar.jpg'
    },
    {
      nombre: 'Corte Texturizado',
      descripcion: 'Ideal para dar volumen y movimiento natural.',
      imagen: 'assets/texturizado.jpg'
    }
  ];
}
