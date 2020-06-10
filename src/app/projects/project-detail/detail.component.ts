import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {Project} from '../../interfaces/project';
import {ProjectsService} from '../projects.service';
import {toNumbers} from '@angular/compiler-cli/src/diagnostics/typescript_version';

@Component({
  selector: 'app-content',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  project: Project;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private projectsService: ProjectsService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.project = this.projectsService.getOne(id);
  }

  close(): void {
    this.location.back();
  }

}
