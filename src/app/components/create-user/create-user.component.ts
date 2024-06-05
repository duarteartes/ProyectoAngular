// Importamos los módulos y servicios que utiliza este componente
import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { SessionStorageService } from '../../services/session-storage.service';

//Configuramos el componente
@Component({
  // Utilizamos este componente en la aplicación a través del selector
  selector: 'app-create-user',
  // Espeficamos la ubicación del archivo
  templateUrl: './create-user.component.html',
  // Especificamos la ubicación del archivo de estilos CSS
  styleUrls: ['./create-user.component.css']
})

// Exportamos el componente y lo definimos
export class CreateUserComponent {
  // Declaramos una propiedad para crear un nuevo usuario
  nuevoUsuario: User = {
    // Representa un objeto User con unas propiedades asignadas por defecto
    nombre: '',
    apellido: '',
    correo: '',
    fechaNacimiento: new Date(),
    admin: false,
  };

  //Definimos el constructor que recibe una instancia de sessionStorage
  constructor(private sessionStorageService: SessionStorageService) {}

  // Declaramos el método crear usuario
  crearUsuario(): void {
    //Utilizamos el servicio sessionStorage para obtener la lista de usuarios almacenada
    let usuarios: User[] = this.sessionStorageService.getUsers() || [];
    // Añadimos el objeto nuevoUsuario a la lista que acabamos de obtener
    usuarios.push(this.nuevoUsuario);
    // Actualizamos la lista de usuarios con el servicio sessionStorage
    this.sessionStorageService.setUsers(usuarios);
    // Reestablecemos el formulario para añadir un nuevo usuario a los valores por defecto
    // Estos valores por defecto es básicamente dejar el formulario en blanco
    this.nuevoUsuario = {
      nombre: '',
      apellido: '',
      correo: '',
      fechaNacimiento: new Date(),
      admin: false,
    };
  }
}