import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskReportComponent } from './task-report/task-report.component';
import { TaskService } from './task.service';
import { AppRoutingModule } from './app-routing.module'; // Importa el módulo de enrutamiento

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskItemComponent,
    TaskFormComponent,
    TaskReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Asegúrate de incluir el AppRoutingModule aquí
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
