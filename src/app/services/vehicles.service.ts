import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
private baseUrl = 'https://join-auto.herokuapp.com/v1/products';

  constructor(private http: HttpClient) { }

getVehicles() {
  return this.http.get(`${this.baseUrl}/sign-up`);
}
}
