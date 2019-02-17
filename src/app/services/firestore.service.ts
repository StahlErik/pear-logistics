import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  QueryFn
} from '@angular/fire/firestore';
import { Observable, of } from 'rxjs/index';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService<Item> {
  constructor(private angularFirestore: AngularFirestore) {}

  insert(path: string, item: Item): Promise<any> {
    return this.col(path).add(item);
  }

  get(path: string, id: string): Observable<Item> {
    return this.doc(path, id).valueChanges();
  }

  list(path: string, queryFn?: QueryFn): Observable<Item[]> {
    return this.colWithIds(path, queryFn);
  }

  colWithIds(path: string, queryFn?: QueryFn): Observable<Item[]> {
    return this.col(path, queryFn)
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as Item;
            data['id'] = a.payload.doc.id;
            return data;
          });
        })
      );
  }

  doc(path: string, id: string): AngularFirestoreDocument<Item> {
    return this.angularFirestore.doc(`${path}/${id}`);
  }

  col(path: string, queryFn?: QueryFn): AngularFirestoreCollection<Item> {
    return this.angularFirestore.collection(path, queryFn);
  }
}
