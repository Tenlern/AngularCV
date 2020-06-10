import { Injectable } from '@angular/core';
import {Project} from '../interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  items: Project[] =  [
    { id: 1, name: 'Test 1', icon_url: '/assets/img/projects/icon_1.jpg', img_url: '/assets/img/projects/1.jpeg' },
    { id: 2, name: 'Test 2', icon_url: '/assets/img/projects/icon_2.jpg', img_url: '/assets/img/projects/2.jpeg' },
    { id: 3, name: 'Test 3', icon_url: '/assets/img/projects/icon_3.jpg', img_url: '/assets/img/projects/3.jpeg' },
  ];


  constructor() { }

  getOne(id: number): Project {
    return this.items.find(item => item.id === id);
  }

  getAll(): Project[] {
    return this.items;
  }

}
