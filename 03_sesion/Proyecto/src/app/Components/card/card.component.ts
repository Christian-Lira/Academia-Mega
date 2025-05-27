import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  imports: [FormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  title = "Ejemplo de ngModel";
  contenido = "Card que vamos a estar trabajando"
  botonText = "Conocer más..."
  img = "https://img.freepik.com/fotos-premium/bandera-india-ondeando-tela-textura_50039-1029.jpg?semt=ais_hybrid&w=740" + Math.random()


  nombre = "Christian Lira"

  mostrarAlerta() {
    alert("Alert");
  }
}