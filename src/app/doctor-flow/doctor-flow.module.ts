import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileModule } from './profile/profile.module';
import { ModelsModule } from './models/models.module';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { VetPfComponent } from './profile/vet-pf/vet-pf.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProfileModule,
    ModelsModule,
    HttpClientModule,
    MatCardModule
  ],
  exports:[

   
    
  ]
})
export class DoctorFlowModule { }
