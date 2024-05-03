import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { ITaskBodyEdit, Task } from '../models/task';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ErrorHandler } from '../utils/error-handler';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss']
})
export class TaskManagerComponent implements OnInit {
  displayedColumns: string[] = ['id', 'completed', 'title', 'actions'];
  dataSource: Task[] = [];
  loading: boolean = false;

  constructor(
    private readonly taskService: TaskService,
    private readonly errorHandler: ErrorHandler,
  ) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getPendingTasksCount(): number {
    return this.dataSource.filter(elem => !elem.completed).length;
  }

  getTasks = async () => {
    this.loading = true;
    try {
      this.dataSource = await this.taskService.getTasks()
    } catch (error: any) {
      // this.confirmDialog.errorHandler(error, "Some error ocurred while fetching tasks")
    }
    this.loading = false;
  }

  editTask = async (id: number | string, body: ITaskBodyEdit): Promise<boolean> => {
    try {
      await this.taskService.editTask(id, body)
      return true;
    } catch (error: any) {

      return false;
      // this.confirmDialog.errorHandler(error, "Some error ocurred while fetching tasks")
    }
  }

  async onCheckboxChange(event: MatCheckboxChange, task: Task): Promise<void> {
    const completed = event.checked;
    task.completed = completed;
    const success: boolean = await this.editTask(task.id, { completed: task.completed })
    if (!success) task.completed = !completed;
  }
}
