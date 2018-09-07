import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { MainBreadcrumbUIStore, IMainBreadcrumbState } from './main-breadcrumb.store';

@Injectable({
  providedIn: 'root'
})
export class MainBreadcrumbUIQuery extends Query<IMainBreadcrumbState> {

  constructor(protected store: MainBreadcrumbUIStore) {
    super(store);
  }

}
