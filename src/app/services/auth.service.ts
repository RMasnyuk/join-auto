import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public baseUrl = 'https://join-auto.herokuapp.com/v1';

  constructor(private http: HttpClient) {
  }

  isAuthenticated() {
    return !!localStorage.getItem('user_token');
  }

  register(body) {
    return this.http.post(`${this.baseUrl}/sign-up`, body);
  }

  login(body) {
    return this.http.post(`${this.baseUrl}/login`, body);
  }
}
