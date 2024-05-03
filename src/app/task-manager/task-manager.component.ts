import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { ITaskBodyCreate, ITaskBodyEdit, Task } from '../models/task';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ErrorHandler } from '../utils/error-handler';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../utils/confirm-dialog/confirm-dialog.component';
import { DialogData, DialogTitleComponent } from './dialog-title/dialog-title.component';

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
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getPendingTasksCount(): number {
    return this.dataSource.filter(elem => !elem.completed).length;
  }

  getTasks = async (): Promise<void> => {
    this.loading = true;
    try {
      this.dataSource = await this.taskService.getTasks()
      this.loading = false;
    } catch (error: any) {
      // this.confirmDialog.errorHandler(error, "Some error ocurred while fetching tasks")
      this.loading = false;
    }
  }

  editTask = async (id: number | string, body: ITaskBodyEdit): Promise<boolean> => {
    this.loading = true;
    try {
      await this.taskService.editTask(id, body)
      this.loading = false;
      return true;
    } catch (error: any) {
      // this.confirmDialog.errorHandler(error, "Some error ocurred while fetching tasks")
      this.loading = false;
      return false;
    }
  }

  deleteTask = async (id: number | string): Promise<boolean> => {
    try {
      await this.taskService.deleteTask(id);
      return true;
    } catch (error: any) {
      // this.confirmDialog.errorHandler(error, "Some error ocurred while fetching tasks")
      return false;
    }
  }

  createTask = async (body: ITaskBodyCreate): Promise<boolean> => {
    this.loading = true;
    try {
      await this.taskService.createTask(body)
      this.loading = false;
      return true;
    } catch (error: any) {
      // this.confirmDialog.errorHandler(error, "Some error ocurred while fetching tasks")
      this.loading = false;
      return false;
    }
  }

  openConfirmDialog(task: Task) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(async (result: boolean) => {
      if (result) {
        const success: boolean = await this.deleteTask(task.id);
        if (success) this.getTasks();
      }
    });
  }

  openEditDialog(task: Task) {
    const data: DialogData = { editing: true, title: task.title };
    const dialogRef = this.dialog.open(DialogTitleComponent, { width: '500px', data });

    dialogRef.afterClosed().subscribe(async (result: string) => {
      if (result) {
        const success: boolean = await this.editTask(task.id, { title: result });
        if (success) this.getTasks();
      }
    });
  }

  openCreateDialog() {
    const data: DialogData = { editing: true, title: "" };
    const dialogRef = this.dialog.open(DialogTitleComponent, { width: '500px', data });

    dialogRef.afterClosed().subscribe(async (result: string) => {
      if (result) {
        const success: boolean = await this.createTask({ title: result });
        if (success) this.getTasks();
      }
    });
  }

  async onCheckboxChange(event: MatCheckboxChange, task: Task): Promise<void> {
    const completed = event.checked;
    task.completed = completed;
    const success: boolean = await this.editTask(task.id, { completed: task.completed })
    if (!success) task.completed = !completed;
  }
}
