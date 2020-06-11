import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

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

  getVehicleData(id, param) {
    const opts = { params: new HttpParams({fromString: `q=${param}`})};
    return this.http.get(`${this.productsUrl}/${id}`, opts);
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
    return this.http.get(`${this.baseUrl}/order/list?order=-1`);
  }

  approveOrderApplication(body) {
    return this.http.post(`${this.baseUrl}/order/application/approve`, body);
  }

  declineOrderApplication(body) {
    return this.http.post(`${this.baseUrl}/order/application/decline`, body);
  }

  makeOrderDone(body) {
    return this.http.put(`${this.baseUrl}/order/complete`, body);
  }

  getUserProducts() {
    return this.http.get(`${this.baseUrl}/user/products/own`);
  }

  getUserSharedProducts() {
    return this.http.get(`${this.baseUrl}/user/products/shared`);
  }

  addProductToOwnList(body) {
    return this.http.post(`${this.baseUrl}/product/add`, body);
  }

  removeProductToOwnList(id) {
    return this.http.delete(`${this.baseUrl}/product/${id}`);
  }

  getUserAllProducts(id) {
    return this.http.get(`${this.baseUrl}/user/products/${id}`);
  }
}
