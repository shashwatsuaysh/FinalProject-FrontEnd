import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { VetPfComponent } from './vet-pf/vet-pf.component';
import { EditVetComponent } from './edit-vet/edit-vet.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
   
    VetPfComponent,
        EditVetComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule

  ],
  exports:[
    VetPfComponent
  ]
})
export class ProfileModule { }
