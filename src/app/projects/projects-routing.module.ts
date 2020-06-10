import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './project-list/list.component';
import {DetailComponent} from './project-detail/detail.component';


const routes: Routes = [
  {path: 'projects', component: ListComponent},
  {path: 'projects/:id', component: DetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
