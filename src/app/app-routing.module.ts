import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { AboutComponent } from 'src/model/about/about.component';
import { CreateUserComponent } from 'src/app/model/create-user/create-user.component';
//import { SearchUserComponent } from 'src/model/search-user/search-user.component';
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
//import { UserDetailsComponent } from 'src/model/user-details/user-details.component';

const routes: Routes = [
  {path: 'header', component: HeaderComponent},
  //Por defecto, redirigimos a la lista de usuarios
  {path: '', redirectTo: 'header', pathMatch: 'full'},
  {path: 'createuser', component: CreateUserComponent},
  {path: 'createexp', component: CreateExpComponent},
  {path: 'createedu', component: CreateEduComponent},
  //{path: 'searchuser', component: SearchUserComponent},
  {path: 'updateuser/:id', component: UpdateUserComponent},
  {path: 'updateexp/:id', component: UpdateExpComponent},
  {path: 'updateedu/:id', component: UpdateEduComponent},
  //{path: 'userdetails/:id', component: UserDetailsComponent},
  //{path: 'about', component: AboutComponent}
  {path: 'userlist', component: UserListComponent},
  {path: 'explist', component: ExpListComponent},
  {path: 'edulist', component: EduListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'habilidades', component: HabilidadesComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }