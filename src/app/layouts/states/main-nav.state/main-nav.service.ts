import { Injectable } from '@angular/core';
import { first } from 'rxjs/operators';
import { MainNavResolver } from './main-nav.resolver';
import { IMainNavState, IMainNavStateItem, MainNavUIStore } from './main-nav.store';

@Injectable({
  providedIn: 'root'
})
export class MainNavService {

  constructor(
    private uiStore: MainNavUIStore,
    private resolver: MainNavResolver
  ) {
  }
  update(resolvers: any, state: IMainNavState) {
    this.updateItems(resolvers, state.items);
    this.updateSelectedItem(resolvers, state.selectedItem);
    this.updateIsCollapsed(resolvers, state.isCollapsed);
  }
  updateItems(resolvers: any, items: IMainNavStateItem[]) {
    this.resolver.items(resolvers, items).pipe(first()).subscribe(data =>
      this.uiStore.update({ items: data, selectedItem: undefined })
    );
  }
  updateSelectedItem(resolvers: any, selectedItem: IMainNavStateItem) {
    this.resolver.selectedItem(resolvers, selectedItem).pipe(first()).subscribe(data =>
      this.uiStore.update({ selectedItem: data })
    );
  }
  updateIsCollapsed(resolvers: any, value: boolean) {
    this.resolver.isCollapsed(resolvers, value).pipe(first()).subscribe(data =>
      this.uiStore.update({ isCollapsed: data })
    );
  }

}
