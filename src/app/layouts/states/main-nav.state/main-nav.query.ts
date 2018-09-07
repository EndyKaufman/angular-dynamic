import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { IMainNavState, MainNavUIStore } from './main-nav.store';

@Injectable({
  providedIn: 'root'
})
export class MainNavUIQuery extends Query<IMainNavState> {

  constructor(protected store: MainNavUIStore) {
    super(store);
  }

}
