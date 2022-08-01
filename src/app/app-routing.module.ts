//se importan los componentes que se usan en éste archivo ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from 'src/app/model/create-user/create-user.component';
import { UpdateUserComponent } from 'src/app/model/update-user/update-user.component';
import { CreateEduComponent } from './model/create-edu/create-edu.component';
import { CreateExpComponent } from './model/create-exp/create-exp.component';
import { EduListComponent } from './model/edu-list/edu-list.component';
import { ExpListComponent } from './model/exp-list/exp-list.component';
import { HabilidadesComponent } from './model/habilidades/habilidades.component';
import { HeaderComponent } from './model/header/header.component';
import { LoginComponent } from './model/login/login.component';
import { UpdateEduComponent } from './model/update-edu/update-edu.component';
import { UpdateExpComponent } from './model/update-exp/update-exp.component';
import { UserListComponent } from './model/user-list/user-list.component';

const routes: Routes = [//se definen rutas permanentes
  //Por defecto, redirigimos al Header
  {path: '', redirectTo: 'header', pathMatch: 'full'},
  {path: 'header', component: HeaderComponent},
  {path: 'createuser', component: CreateUserComponent},
  {path: 'createexp', component: CreateExpComponent},
  {path: 'createedu', component: CreateEduComponent},
  {path: 'updateuser/:id', component: UpdateUserComponent},
  {path: 'updateexp/:id', component: UpdateExpComponent},
  {path: 'updateedu/:id', component: UpdateEduComponent},
  {path: 'userlist', component: UserListComponent},
  {path: 'explist', component: ExpListComponent},
  {path: 'edulist', component: EduListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'habilidades', component: HabilidadesComponent,}
];

@NgModule({ //decorador que marca una clase como ngModule y provee metada de configuración
  imports: [RouterModule.forRoot(routes)],//El set de NgModules cuyos declarables exportados están disponibles 
  //a los modelos en éste módulo.
  exports: [RouterModule]//El set de componentes, directivas, y conexiones declaradas en éste NgModule que pueden 
  //ser usadas en el modelo de cualquier componente que es parte de un NgModule, que importe éste NgModule. 
  //Las declaraciones exportadas son la API pública del módulo.
})
export class AppRoutingModule { }