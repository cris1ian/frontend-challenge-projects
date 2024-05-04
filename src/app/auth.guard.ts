import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, catchError, map, of } from 'rxjs';
import { AuthService } from './public/auth.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): Observable<boolean> {
    return this.authService.isAuthenticated().pipe(
      map((isAuthenticated: boolean) => {
        if (!isAuthenticated) this.router.navigate(['/login']);
        return isAuthenticated;
      }),
      catchError((error: any) => {
        console.error('Error checking authentication:', error);
        this.router.navigate(['/login']);
        return of(false);
      })
    )
  }

}
