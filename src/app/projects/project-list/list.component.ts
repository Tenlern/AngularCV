import { Component, OnInit } from '@angular/core';
import {Project} from '../../interfaces/project';
import {ProjectsService} from '../projects.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  items: Project[];
  filter = 'root';

  constructor(
    private projectService: ProjectsService,
    private route: ActivatedRoute,
    private title: Title
  )
  {
    title.setTitle('Портфолио');
    projectService.getList().subscribe(
      list => this.items = list
    );
  }

  ngOnInit(): void {
    this.route.fragment.subscribe(
      fragment => this.filterList(fragment)
    );

  }

  filterList(tag: string): void {
    const foreign: object = {
      design: 'дизайн',
      web: 'веб'
    };
    if (tag) {
      this.filter = tag;
      //this.projectService.getAllByTag(foreign[tag]).subscribe(res => this.items = res);
    }
    else {
      this.filter = 'root';
      this.projectService.getList().subscribe(list => this.items = list);
    }
  }

}
