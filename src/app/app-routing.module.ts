// Importamos los módulos y componentes necesarios para configurar el enrutamiento
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ListUsersComponent } from './components/list-users/list-users.component';

// Definimos las rutas de nuestra web o aplicación
const routes: Routes = [
  // Tenemos 2 propiedades que son:
  // Path que define la URL que reactivará la ruta
  // Component que es el componente que se asociará a la ruta concreta
  {path: 'createUser', component: CreateUserComponent},
  {path: 'listUsers', component: ListUsersComponent},
  { path: '', component: HomeComponent },
];

// Definimos un módulo para configurar el enrutamiento principal
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

// Exportamos la configuración de las rutas para que lo utilicen otros archivos
export class AppRoutingModule { }
