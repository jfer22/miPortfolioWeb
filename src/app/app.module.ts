import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './model/user-list/user-list.component';
import { CreateUserComponent } from './model/create-user/create-user.component';
import { FormsModule } from '@angular/forms';
import { UpdateUserComponent } from './model/update-user/update-user.component';
import { HeaderComponent } from './model/header/header.component';
import { ExpListComponent } from './model/exp-list/exp-list.component';
import { CreateExpComponent } from './model/create-exp/create-exp.component';
import { EduListComponent } from './model/edu-list/edu-list.component';
import { CreateEduComponent } from './model/create-edu/create-edu.component';
import { LoginComponent } from './model/login/login.component';
import { UpdateExpComponent } from './model/update-exp/update-exp.component';
import { UpdateEduComponent } from './model/update-edu/update-edu.component';
import { HabilidadesComponent } from './model/habilidades/habilidades.component';

//Una clase Angular Module describe como las partes de la aplicación encajan juntas. Cada aplicación tiene 
//por lo menos un Angular module, el módulo raiz que uno carga como una instrucción inicial que habilita la 
//introducción del resto del programa (bootstrap) para lanzar la aplicación. Se puede llamar como uno quierat. 
//El nombre convencional es AppModule.
@NgModule({
  declarations: [// los componentes individuales de la aplicación
    AppComponent,
    UserListComponent,
    CreateUserComponent,
    UpdateUserComponent,
    HeaderComponent,
    ExpListComponent,
    CreateExpComponent,
    EduListComponent,
    CreateEduComponent,
    LoginComponent,
    UpdateExpComponent,
    UpdateEduComponent,
    HabilidadesComponent,
    
  ],
  imports: [//El array imports del modulo  aparece exclusivamente en el objeto metadata @NgModule. 
  //Este le informa a Angular sobre otros módulos específicos de Angular — todos ellos clases decoradas con
  // @NgModule — que la aplicación necesita para funcionar adecuadamente.
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
