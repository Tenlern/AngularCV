import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {Project} from '../../interfaces/project';
import {ProjectsService} from '../projects.service';
import {toNumbers} from '@angular/compiler-cli/src/diagnostics/typescript_version';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-content',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  project: Project;

  constructor(
    private title: Title,
    private route: ActivatedRoute,
    private projectsService: ProjectsService
  ) {
    const id = +this.route.snapshot.paramMap.get('id');
    projectsService.getById(id).subscribe(res => this.project = res);
  }

  ngOnInit(): void {
    console.log(this.project);
    this.title.setTitle(this.project.name);
  }

}
