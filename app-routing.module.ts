import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskReportComponent } from './task-report/task-report.component';

const routes: Routes = [
  { path: '', component: TaskListComponent },       // Página de lista de tareas
  { path: 'add-task', component: TaskFormComponent }, // Ruta para agregar tarea
  { path: 'edit-task/:id', component: TaskFormComponent }, // Ruta para editar tarea
  { path: 'report', component: TaskReportComponent }, // Ruta para el informe
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
