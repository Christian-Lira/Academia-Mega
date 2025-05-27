import { Component } from '@angular/core';
import { HijoComponent } from '../../Components/hijo/hijo.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [HijoComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  //Simulación de API
  usuarios = [
    { nombre: "Christian", edad: 29, profesion: "Ingeniero" },
    { nombre: "Gabriela", edad: 50, profesion: "Estilista" },
    { nombre: "José", edad: 20, profesion: "Desarrollador" },
    { nombre: "Lili", edad: 32, profesion: "Dentista" },
  ];

  mensajeDelHijo = "";
  recibiMensaje(mensaje: string) {
    this.mensajeDelHijo = mensaje

  }


}
