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

@NgModule({
  declarations: [
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
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
