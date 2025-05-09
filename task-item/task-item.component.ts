import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-task-item',
  imports: [],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task: any;
  @Output() delete = new EventEmitter<number>();

  deleteTask(): void {
    this.delete.emit(this.task.id);
  }

}
