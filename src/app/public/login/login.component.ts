import { Component, OnInit } from '@angular/core';
import { AuthService, ILoginBody } from '../auth.service';
import { Router } from '@angular/router';
import { ErrorHandler } from 'src/app/utils/error-handler';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private readonly errorHandler: ErrorHandler,
  ) { }

  login(): void {
    const body: ILoginBody = { username: this.username, password: this.password }
    this.authService.login(body).subscribe({
      next: (response: any) => {
        console.log("login", response);
        const token = response.token;
        this.authService.saveToken(token);
        this.router.navigate(['/tasks']);

      },
      error: (error: HttpErrorResponse) => {
        this.errorHandler.open(error.error.message);
      }
    });
  }
}
