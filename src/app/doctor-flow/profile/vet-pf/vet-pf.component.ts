import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vet } from '../../models/Vet';
import { VetServiceService } from '../../vet-service.service';

@Component({
  selector: 'app-vet-pf',
  templateUrl: './vet-pf.component.html',
  styleUrls: ['./vet-pf.component.scss']
})
export class VetPfComponent implements OnInit {

  constructor(private vetService : VetServiceService, private router : Router) { }
  public curVet : Vet;
  ngOnInit(): void {

    this.vetService.GetVet().subscribe((data)=> {
      console.log(data);
      console.log("Data fetched");
      this.curVet = new Vet();
      this.curVet.DoctorID = data.DoctorID;
      this.curVet.Name = data.DoctorName;
      this.curVet.Email = data.Email;
      this.curVet.Clinic = data.Clinic;
      this.curVet.Speciality = data.Speciality;
      this.curVet.Mobile = data.Mobile;
      this.curVet.NPI = data.NPI;
    })
  }

  public NavigateEdit() : void{
    //console.log(this.curVet.DoctorID);
    this.router.navigate(["vets/profile/EditVet/",this.curVet.DoctorID]);
    return;

  }

}
