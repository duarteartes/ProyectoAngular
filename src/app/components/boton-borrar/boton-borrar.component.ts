// Importamos los módulos que necesita este componente
import { Component, Input, Output, EventEmitter } from '@angular/core';

// Configuramos el componente
@Component({
  // Utilizamos este componente en la aplicación a través del selector
  selector: 'app-boton-borrar',
  // Especificamos la plantilla del componente. Es un botón con un evento click asociado al método eliminarUsuario
  template: '<button (click)="eliminarUsuario()">Eliminar Usuario</button>',
  // Especificamos la ubicación del archivo de estilos CSS
  styleUrls: ['./boton-borrar.component.css']
})

// Exportamos el componente y lo definimos
export class BotonBorrarComponent {
  // Permitimos que usuarioId se pase desde el componente padre al hijo
  @Input() usuarioId: number | undefined;
  // Emitimos eventos desde el componente hijo hacia el componente padre
  @Output() eliminarUsuarioEvent = new EventEmitter<number>();
  // Creamos este método para ejecutarlo cuando se haga click en el botón
  eliminarUsuario() {
    // Ordenamos un evento a través de eliminarUsuarioEvent con un valor de usuarioId
    this.eliminarUsuarioEvent.emit(this.usuarioId || 0);
  }
}