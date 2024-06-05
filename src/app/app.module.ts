// Importamos todos los módulos y servicios necesarios para crear la aplicación
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SessionStorageService } from './services/session-storage.service';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { BotonBorrarComponent } from './components/boton-borrar/boton-borrar.component';
import { BotonAdminComponent } from './components/boton-admin/boton-admin.component';
import { HomeComponent } from './components/home/home.component';
import { UserService } from './services/user.service';

// Definimos el módulo en Angular
@NgModule({
  // Declaramos los componentes que pertenecen al módulo
  declarations: [
    AppComponent,
    CreateUserComponent,
    ListUsersComponent,
    BotonBorrarComponent,
    BotonAdminComponent,
    HomeComponent
  ],
  // Importamos los módulos necesarios para nuestra aplicación
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  // Especificamos los proveedores de nuestra aplicación
  providers: [SessionStorageService, UserService],
  // Indicamos el componente con el que iniciamos nuestra aplicación
  bootstrap: [AppComponent]
})
// Exportamos esta clase que es la principal para configurar la aplicación
export class AppModule { }
