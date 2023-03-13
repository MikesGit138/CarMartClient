import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { IsAuthenticatedGuard } from './guards/is-authenticated.guard';
import { LocationComponent } from './pages/location/location.component';
import { ManageLocationsComponent } from './pages/manage-locations/manage-locations/manage-locations.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo:'/login', pathMatch: 'full'},
  {path: 'welcome', component: WelcomeComponent, canActivate:[IsAuthenticatedGuard]},
  {path: 'location/:id', component: LocationComponent, canActivate:[IsAuthenticatedGuard]},
  {path: 'manage-locations', component: ManageLocationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
