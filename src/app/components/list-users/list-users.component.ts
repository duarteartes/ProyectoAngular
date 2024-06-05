// Importamos los módulos y servicios que utiliza este componente
import { Component } from '@angular/core';
import { SessionStorageService } from '../../services/session-storage.service';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

//Configuramos el componente
@Component({
  // Utilizamos este componente en la aplicación a través del selector
  selector: 'app-list-users',
  // Espeficamos la ubicación del archivo
  templateUrl: './list-users.component.html',
  // Especificamos la ubicación del archivo de estilos CSS
  styleUrls: ['./list-users.component.css']
})

// Exportamos el componente y lo definimos
export class ListUsersComponent {
  // Declaramos esta propiedad que almacenará la lista de usuarios
  usuarios: User[] = [];

  // Definimos el constructor
  constructor(
    // Añadimos las dependencias de SessionStorage y User
    private sessionStorageService: SessionStorageService,
    private userService: UserService
  ) {
    // Obtenemos la lista de usuarios almacenada en la sessionStorage
    const storedUsers = this.sessionStorageService.getUsers();
    // Asignamos esta lista a la propiedad usuarios
    this.usuarios = storedUsers ? [...storedUsers] : [];
  }

  // Creamos este método para calcular la edad del usuario. Toma como parámetro una fecha y devuelve un número
  calcularEdad(fechaNacimiento: Date): number {
    // Almacenamos la fecha actual
    const hoy = new Date();
    // Guardamos la fecha de nacimiento del usuario
    const nacimiento = new Date(fechaNacimiento);
    // Almacenamos la edad restando la fecha de nacimiento y la fecha actual
    const edad = hoy.getFullYear() - nacimiento.getFullYear();
    // Devolvemos el valor calculado en la operación anterior
    return edad;
  }

  // Creamos este método para eliminar un usuario de la lista. Toma como parámetro una id que es un número
  eliminarUsuario(id: number | undefined): void {
    // Verificamos si el usuario existe y le das a sí a una ventana emergente que aparece
    if (id !== undefined && confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
      // Eliminamos el usuario utilizando el servicio del sessionStorage
      this.userService.borrarUsuario(id);
      // Actualizamos la lista de usuarios a través del servicio userService
      this.usuarios = this.userService.getUsers() || [];
    }
  }

  // Creamos este metodo para cambiar el rol de administrador a un usuario
  toggleAdmin(id: number | undefined): void {
    // Verificamos que la id esté definida en un usuario
    if (id !== undefined) {
      // Utilizamos el servicio sessionStorage para cambiar el rol de administrador
      this.userService.cambiarRol(id);
      // Actualizamos la lista de usuarios a través del servivio userService
      this.usuarios = this.userService.getUsers() || [];
    }
  }
}