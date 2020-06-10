import { Component, OnInit } from '@angular/core';
import {Project} from '../../interfaces/project';
import {ProjectsService} from '../projects.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  items: Project[];

  constructor(private projectService: ProjectsService) { }

  ngOnInit(): void {
    this.items = this.projectService.getAll();
  }

}
