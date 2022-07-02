import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { AboutComponent } from 'src/model/about/about.component';
import { CreateUserComponent } from 'src/app/model/create-user/create-user.component';
//import { SearchUserComponent } from 'src/model/search-user/search-user.component';
import { UpdateUserComponent } from 'src/app/model/update-user/update-user.component';
//import { UserDetailsComponent } from 'src/model/user-details/user-details.component';
import { UserListComponent } from 'src/app/model/user-list/user-list.component';
import { HeaderComponent } from './model/header/header.component';

const routes: Routes = [
  {path: 'header', component: HeaderComponent},
  //Por defecto, redirigimos a la lista de usuarios
  {path: '', redirectTo: 'header', pathMatch: 'full'},
  {path: 'createuser', component: CreateUserComponent},
  //{path: 'searchuser', component: SearchUserComponent},
  {path: 'updateuser/:id', component: UpdateUserComponent},
  //{path: 'userdetails/:id', component: UserDetailsComponent},
  //{path: 'about', component: AboutComponent}
  {path: 'userlist', component: UserListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }