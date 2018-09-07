import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface IMainNavStateItem {
  key: string;
  icon?: string;
  caption: string;
  parent?: IMainNavStateItem;
  children?: IMainNavStateItem[];
  routerLink?: string[];
}

export interface IMainNavState {
  theme?: string;
  isCollapsed?: boolean;
  selectedItem?: IMainNavStateItem;
  items: IMainNavStateItem[];
}

export function createInitialMainNavState(): IMainNavState {
  return {
    theme: 'dark',
    isCollapsed: false,
    items: []
  };
}
@Injectable({
  providedIn: 'root'
})
@StoreConfig({
  name: 'main-nav'
})
export class MainNavUIStore extends Store<IMainNavState> {

  constructor() {
    super(createInitialMainNavState());
  }

}

