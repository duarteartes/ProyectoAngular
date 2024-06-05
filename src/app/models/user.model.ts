// Exportamos la interfaz de un objeto para poder acceder a ella desde otro archivo
export interface User {
    //Definimos las propiedades que tiene que tener el objeto
    // Las propiedades de nombre, apellido y correo son cadenas de texto
    nombre: string;
    apellido: string;
    correo: string;
    // Esta propiedad es de tipo date para representar una fecha
    fechaNacimiento: Date;
    // Esta propiedades es de tipo boolean para indicar si es administrador o no
    admin: boolean;
}