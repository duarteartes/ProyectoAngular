// Importamos los módulos y servicios
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { SessionStorageService } from './session-storage.service';

// Se proporcionará una instancia global del servicio de SessionStorage para toda la aplicación
@Injectable({
  providedIn: 'root',
})

//Definimos la clase
export class UserService {
  // Declaramos una constante para almacenar y recuperar los datos del sessionStorage
  private readonly USER_KEY = 'usuarios';
  // Definimos el constructor que recibe la instancia del servicio sessionStorage
  constructor(private sessionStorageService: SessionStorageService) {}
  // Definimos este método para obtener la lista de usuarios almacenada en el sessionStorage
  getUsers(): User[] | null {
    return this.sessionStorageService.getUsers();
  }
  // Cambiamos el rol del usuario en la lista almancenada
  cambiarRol(userId: number): void {
    // Obtenemos la lista de usuarios
    const users = this.getUsers() || [];
    // Modificamos el rol del usuario específico
    users[userId].admin = !users[userId].admin;
    // Actualizamos la lista en el sessionStorage
    this.sessionStorageService.setUsers(users);
  }
  // Borramos un usuario de la lista almacenada
  borrarUsuario(userId: number): void {
    //Obtenemos la lista de usuarios
    const users = this.getUsers() || [];
    // Eliminamos un usuario de una posición específica
    users.splice(userId, 1);
    // Actualizamos la lista en el sessionStorage
    this.sessionStorageService.setUsers(users);
  }
}
