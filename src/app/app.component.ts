// Importamos la clase component para poder crear componentes en la aplicación
import { Component } from '@angular/core';

// Proporcionamos información a Angular para procesar la aplicación
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

// Exportamos esta clase para poder utilizarla en otros archivos si es necesario
export class AppComponent {
  // Asignamos en esta propiedad el título de nuestra página web o aplicación
  title = 'usuarios-app';
}
