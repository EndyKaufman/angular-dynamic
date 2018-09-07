import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface IMainBreadcrumbStateItem {
  key?: string;
  caption: string;
  routerLink?: string[];
  parent?: IMainBreadcrumbStateItem;
}
export interface IMainBreadcrumbState {
  items: IMainBreadcrumbStateItem[];
  selectedItem?: IMainBreadcrumbStateItem;
}
export function createInitialMainBreadcrumbState(): IMainBreadcrumbState {
  return {
    items: []
  };
}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({
  name: 'main-breadcrumb'
})
export class MainBreadcrumbUIStore extends Store<IMainBreadcrumbState> {

  constructor() {
    super(createInitialMainBreadcrumbState());
  }

}

