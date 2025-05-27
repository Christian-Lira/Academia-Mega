import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-manager',
  imports: [CommonModule],
  templateUrl: './product-manager.component.html',
  styleUrl: './product-manager.component.css'
})
export class ProductManagerComponent {
  categoriaSeleccionada = "electronica";

  productos = {
    electronica: [
      { nombre: "Monitor", precio: 400, disponible: true, descuento: 5 },
      { nombre: "Dron", precio: 1500, disponible: false, descuento: 100 },
    ],
    ropa: [
      { nombre: "Gorra", precio: 40, disponible: true, descuento: 10 },
      { nombre: "Guantes", precio: 80, disponible: true, descuento: 10 },
    ],
    alimentos: [
      { nombre: "Frutas", precio: 20, disponible: true, descuento: 0 },
      { nombre: "Verduras", precio: 10, disponible: true, descuento: 10 },
    ]
  }

  cambiarCategoria(cat: string) {
    this.categoriaSeleccionada = cat;
  }
}
