import { Component, OnInit } from '@angular/core';
import {Item} from '../interfaces/item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  items: Item[];

  constructor() { }

  ngOnInit(): void {
    this.items = this.getItems();
  }

  getItems(): Item[] {
    return [
      { id: 1, name: 'Test', img_url: '/assets/img/projects/icon_1.jpg' },
      { id: 2, name: 'Test', img_url: '/assets/img/projects/icon_2.jpg' },
    ];
  }

}
