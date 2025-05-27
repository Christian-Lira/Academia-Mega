import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  title = "Esto es una card";
  contenido = "Card que vamos a estar trabajando"
  botonText = "Ver más..."
  img = "https://img.freepik.com/fotos-premium/bandera-india-ondeando-tela-textura_50039-1029.jpg?semt=ais_hybrid&w=740"
}
