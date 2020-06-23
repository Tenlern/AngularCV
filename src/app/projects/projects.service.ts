import {Injectable} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';

import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';

import {Project} from '../interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  items: Observable<Project[]>;

  constructor(private firebase: AngularFireDatabase) {
    this.items = firebase.list<Project>('projects').valueChanges();
  }

  getList(): Observable<Project[]> {
    return this.items;
  }

  getByIdv1(id: number): Observable<Project[]> {
    return this.firebase.list<Project>(
      'projects',
        ref => ref.orderByChild('id').equalTo(id)
    ).valueChanges();
  }

  getByIdv2(id: number): Observable<Project> {
    const result = this.items.lift<Project>(
      filter((item: Project) => item.id === id)
    );
    result.subscribe(res => console.log(res));
    console.log(1);
    return result;
  }

  getByIdv3(id: number): any {
    return this.items.switchMap(size =>
      db.list('/items', ref =>
        size ? ref.orderByChild('size').equalTo(size) : ref
      ).snapshotChanges()
    );
  }

  // getByTag(tag: string): Observable<Project[]> {
  //   // return this.items.pipe(
  //   //   filter<Project>(item => item.tag === tag)
  //   // )
  // }

  // getOne(id: number): Observable<Project> {
  //   return this.items.lift<Project>(console.log(*));
  // }
  //
  // getAll(): Observable<Project[]>{
  //   return this.items;
  // }
  //
  // getAllByTag(tag: string){
  //   return this.items.pipe(
  //     filter(
  //       item => {
  //         console.log(item);
  //         item.tags.includes(tag);
  //       }
  //     )
  //   );
  // }

}
