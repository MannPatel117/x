import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/LoggedOut/register/register.component';
import { LoginComponent } from './pages/LoggedOut/login/login.component';
import { MainComponent } from './pages/LoggedOut/main/main.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', loadChildren:()=> import('./pages/LoggedIn/home/home.module').then(mod => mod.HomeModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
