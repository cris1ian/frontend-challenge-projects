import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { lastValueFrom } from 'rxjs';
import { ITaskBodyCreate, ITaskBodyEdit, Task } from '../models/task';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  service = "task/";

  constructor(private http: HttpClient) { };

  getTasks(): Promise<Task[]> {
    const url: string = environment.api + this.service;
    return lastValueFrom(this.http.get<Task[]>(url));
  }

  editTask(id: number | string, body: ITaskBodyEdit): Promise<void> {
    const url: string = environment.api + this.service + `${id}`;
    return lastValueFrom(this.http.put<void>(url, body));
  }

  deleteTask(id: number | string): Promise<number> {
    const url: string = environment.api + this.service + `${id}`;
    return lastValueFrom(this.http.delete<number>(url));
  }

  createTask(body: ITaskBodyCreate): Promise<Task> {
    const url: string = environment.api + this.service;
    return lastValueFrom(this.http.post<Task>(url, body));
  }

}
