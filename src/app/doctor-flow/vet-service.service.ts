import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vet } from './models/Vet';

@Injectable({
  providedIn: 'root'
})
export class VetServiceService {

  constructor(private http : HttpClient) { }

  public GetVet() : any {

    return this.http.get("https://doctorflowuipetzy.azurewebsites.net/api/doctors/3");

  }
}
