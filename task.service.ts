import { Injectable } from '@angular/core';

export interface Task {
  id: number;
  title: string;
  description: string;
  status: string; // "completed" o "pending"
  priority: string; // "high", "medium", "low"
  createdAt: string;
  dueDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[] = [
    { id: 1, title: 'Task 1', description: 'Description 1', status: 'pending', priority: 'high', createdAt: '2025-05-01', dueDate: '2025-05-10' },
    { id: 2, title: 'Task 2', description: 'Description 2', status: 'completed', priority: 'medium', createdAt: '2025-05-02', dueDate: '2025-05-12' },
  ];
  constructor() { }

  getTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: number) {
    return this.tasks.find(task => task.id === id);
  } 

  addTask(task: Task) {
    this.tasks.push(task);
  }

  updateTask(id: number, updatedTask: Task) {
    const index = this.tasks.findIndex(task => task.id === id);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
    }
  }

  deleteTask(id: number) {
    const index = this.tasks.findIndex(task => task.id === id);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }
}


