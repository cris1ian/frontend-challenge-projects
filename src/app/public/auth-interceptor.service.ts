import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  tokenKey = 'authToken';

  constructor(private router: Router) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem(this.tokenKey);

    if (token) {
      request = request.clone({ setHeaders: { Authorization: `Bearer ${token}`, }, });
    }

    return next.handle(request).pipe(
      tap(
        () => { },
        (error) => {
          if (error.status === 401 || error.status === 403) {

            localStorage.removeItem(this.tokenKey);
            this.router.navigate(['/login']);
          }
        }
      )
    );
  }
}
