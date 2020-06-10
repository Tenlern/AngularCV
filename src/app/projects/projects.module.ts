import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ListComponent} from './project-list/list.component';
import {DetailComponent} from './project-detail/detail.component';
import { ProjectsRoutingModule } from './projects-routing.module';


@NgModule({
  declarations: [
    ListComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ],
})
export class ProjectsModule { }
