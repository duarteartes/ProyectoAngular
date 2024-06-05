// Importamos este módulo para poder definir componentes en Angular
import { Component } from '@angular/core';

// Configuramos el componente
@Component({
  // Utilizamos este componente en la aplicación a través del selector
  selector: 'app-home',
  // Espeficamos la ubicación del archivo
  templateUrl: './home.component.html',
  // Especificamos la ubicación del archivo de estilos CSS
  styleUrl: './home.component.css'
})

// Exportamos el componente
export class HomeComponent {
}
