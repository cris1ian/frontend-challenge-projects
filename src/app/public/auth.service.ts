import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface ILoginBody { username: string, password: string }

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  service = "auth/";
  tokenKey = 'authToken';

  constructor(private http: HttpClient) { }

  isAuthenticated(): Observable<boolean> {
    const token = localStorage.getItem(this.tokenKey);
    const body = token ? { token } : {};

    console.log("isAuthenticated", token);

    const url: string = environment.api + this.service + "verify-token";
    return this.http.post<boolean>(url, body);
  }

  login(body: ILoginBody): Observable<Task> {
    const url: string = environment.api + this.service + 'login';
    return this.http.post<Task>(url, body);
  }

  saveToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }
}
