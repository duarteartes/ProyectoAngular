// Importamos los módulos
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

// Se proporcionará una instancia global del servicio de SessionStorage para toda la aplicación
@Injectable({
  providedIn: 'root'
})

// Definimos la clase
export class SessionStorageService {
  // Declaramos una constante para almacenar y recuperar datos en el sessionStorage
  private readonly USER_KEY = 'usuarios';
  // Definimos este método para recuperar los datos de los usuarios almacenados
  getUsers(): User[] | null {
    // Obtenemos el valor almacenado
    const usersString = sessionStorage.getItem(this.USER_KEY);
    // Si hay un valor almacenado lo devuelve como un array de objetos, si no devuelve null
    return usersString ? JSON.parse(usersString) : null;
  }
  // Definimos este método para almacenar la lista de usuarios en el sessionStorage
  setUsers(users: User[]): void {
    //Convertimos el array de usuarios en una cadena JSON y lo almacenamos en la sessionStorage
    sessionStorage.setItem(this.USER_KEY, JSON.stringify(users));
  }
}
