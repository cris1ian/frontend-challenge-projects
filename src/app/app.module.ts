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
import { ConfirmDialogComponent } from './utils/confirm-dialog/confirm-dialog.component';
import { DialogTitleComponent } from './task-manager/dialog-title/dialog-title.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TaskManagerComponent,
    ConfirmDialogComponent,
    DialogTitleComponent,
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
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
