// Importamos los módulos que necesita este componente
import { Component, Input, Output, EventEmitter } from '@angular/core';

// Configuramos el componente
@Component({
  // Utilizamos este componente en la aplicación a través del selector
  selector: 'app-boton-admin',
  // Especificamos la plantilla del componente. Es un botón con un evento click asociado al método toogleAdmin
  template: '<button (click)="toggleAdmin()">Cambiar Administrador</button>',
  // Especificamos la ubicación del archivo de estilos CSS
  styleUrls: ['./boton-admin.component.css']
})

// Exportamos el componente y lo definimos
export class BotonAdminComponent {
  // Permitimos que isAdmin pase desde el componente padre al hijo
  @Input() isAdmin: boolean | undefined;
  // Emitimos eventos desde el componente hijo al padre
  @Output() toggleAdminEvent = new EventEmitter<void>();
  // Creamos este método para ejecutarlo cuando se haga click en el botón
  toggleAdmin() {
    // Ordenamos un evento a través de toggleAdminEvent
    this.toggleAdminEvent.emit();
  }
}