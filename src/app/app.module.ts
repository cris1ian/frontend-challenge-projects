import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TaskService } from './services/task.service';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    TaskManagerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
