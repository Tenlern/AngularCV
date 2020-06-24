import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';

import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';

import {Project} from '../interfaces/project';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  itemsRef: AngularFirestoreCollection<Project>;

  constructor(private firestore: AngularFirestore) {
    this.itemsRef = firestore.collection<Project>('projects');
  }

  getList(): Observable<Project[]> {
    return this.itemsRef.valueChanges({idField: 'id'});
  }

  getById(id: string): Observable<Project> {
    return this.firestore.doc<Project>('projects/' + id).valueChanges();
  }

  getByTag(tag: string): Observable<Project[]> {
    return this.firestore.collection<Project>(
      'projects', ref => ref.where('tags', 'array-contains', tag)
    ).valueChanges({idField: 'id'});
  }

}
