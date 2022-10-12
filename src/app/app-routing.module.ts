import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import { loginRequest } from './app-config';
import { AllPetsVetsComponent } from './dashboard/all-pets-vets/all-pets-vets.component';
import { EditVetComponent } from './doctor-flow/profile/edit-vet/edit-vet.component';
import { VetPfComponent } from './doctor-flow/profile/vet-pf/vet-pf.component';
import { LoginComponent } from './login/login.component';
import { PetparentProfileComponent } from './petparent-profile/petparent-profile.component';
import { RecepProfileComponent } from './recep-profile/recep-profile.component';
import { SignupComponent } from './signup/signup.component';

import { ViewDetailsComponent } from './view-details/view-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  {path:'vets/profile',component:VetPfComponent},
  {path:'vets/profile/EditVet/:id',component:EditVetComponent},
 


  {path:'login',component:LoginComponent},
  {
    path: 'landing',
    loadChildren: () =>
      import('./landing-screen/landing-screen.module').then((m) => m.LandingScreenModule),
  },
  {
    path: 'login',
    component: LoginComponent,
  },
 { path: 'signup', component: SignupComponent },
  { path: 'details', component: AllPetsVetsComponent },
  { path: 'petparentprofile', component: PetparentProfileComponent},
  
  { path: 'recepprofile', component: RecepProfileComponent},
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {path:'viewdetails',component:ViewDetailsComponent},
  { path: '**', redirectTo: 'landing', pathMatch: 'full' }
];

const config: ExtraOptions = {
  useHash : false
}

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:false})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
