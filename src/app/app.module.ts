import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TaskService } from './services/task.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './common/material.module';
import { ConfirmDialogComponent } from './utils/confirm-dialog/confirm-dialog.component';
import { DialogTitleComponent } from './task-manager/dialog-title/dialog-title.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './public/login/login.component';
import { AuthInterceptor } from './public/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskManagerComponent,
    ConfirmDialogComponent,
    DialogTitleComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    HttpClientModule,
    MaterialModule,
    FormsModule
  ],
  providers: [
    TaskService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
