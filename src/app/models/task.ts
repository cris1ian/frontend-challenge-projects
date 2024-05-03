export class Task {
    id: number;
    title: number;
    completed: boolean;
    userId: number;

    constructor(task: Task) {
        this.id = task.id;
        this.title = task.title;
        this.completed = task.completed;
        this.userId = task.userId;
    }
}

export interface ITaskBodyEdit {
    title?: number;
    completed?: boolean;
}

export interface ITaskBodyCreate {
    title: number;
    completed?: boolean;
}