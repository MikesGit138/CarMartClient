import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { IsAuthenticatedGuard } from './guards/is-authenticated.guard';
import { LocationComponent } from './pages/location/location.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo:'/login', pathMatch: 'full'},
  {path: 'welcome', component: WelcomeComponent, canActivate:[IsAuthenticatedGuard]},
  {path: 'location', component: LocationComponent},
  {path: 'location/:id', component: LocationComponent, canActivate:[IsAuthenticatedGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
