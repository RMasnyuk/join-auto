import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  private baseUrl = 'https://join-auto.herokuapp.com/v1';
  private productsUrl = 'https://join-auto.herokuapp.com/v1/products';
  private postProductUrl = 'https://join-auto.herokuapp.com/v1/product/post';
  private postOrderUrl = 'https://join-auto.herokuapp.com/v1//order/post';

  constructor(private http: HttpClient) {
  }

  getVehicles() {
    return this.http.get(`${this.productsUrl}`);
  }

  postVehicle(body) {
    return this.http.post(this.postProductUrl, body);
  }

  postOrder(body) {
    return this.http.post(this.postOrderUrl, body);
  }

  getVehicleData(id) {
    return this.http.get(`${this.productsUrl}/${id}`);
  }

  getUserInfo(id) {
    return this.http.get(`${this.baseUrl}/user/${id}`);
  }

  createOffer(body) {
    return this.http.post(`${this.baseUrl}/product/buy`, body);
  }

  approveBuyRequest(body) {
    return this.http.post(`${this.baseUrl}/product/approve`, body);
  }

  declineRequest(body) {
    return this.http.post(`${this.baseUrl}/product/decline`, body);
  }

  getOrderApplications(id) {
    return this.http.get(`${this.baseUrl}/order/applications/${id}`);
  }

  getOrderData(id) {
    return this.http.get(`${this.baseUrl}/order/${id}`);
  }

  createOrderApplication(body) {
    return this.http.post(`${this.baseUrl}/order/application`, body);
  }

  getOrderList() {
    return this.http.get(`${this.baseUrl}/order/list`);
  }

  approveOrderApplication(body) {
    return this.http.post(`${this.baseUrl}/order/application/approve`, body);
  }

  declineOrderApplication(body) {
    return this.http.post(`${this.baseUrl}/order/application/decline`, body);
  }
}
