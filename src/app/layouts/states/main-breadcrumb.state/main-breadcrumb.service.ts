import { Injectable } from '@angular/core';
import { first } from 'rxjs/operators';
import { MainBreadcrumbResolver } from './main-breadcrumb.resolver';
import { IMainBreadcrumbState, IMainBreadcrumbStateItem, MainBreadcrumbUIStore } from './main-breadcrumb.store';

@Injectable({
  providedIn: 'root'
})
export class MainBreadcrumbService {

  constructor(
    private uiStore: MainBreadcrumbUIStore,
    private resolver: MainBreadcrumbResolver
  ) {
  }
  update(resolvers: any, state: IMainBreadcrumbState) {
    this.updateItems(resolvers, state.items);
    this.updateSelectedItem(resolvers, state.selectedItem);
  }
  updateItems(resolvers: any, items: IMainBreadcrumbStateItem[]) {
    this.resolver.items(resolvers, items).pipe(first()).subscribe(data =>
      this.uiStore.update({ items: data, selectedItem: undefined })
    );
  }
  updateSelectedItem(resolvers: any, selectedItem: IMainBreadcrumbStateItem) {
    this.resolver.selectedItem(resolvers, selectedItem).pipe(first()).subscribe(data =>
      this.uiStore.update({ selectedItem: data })
    );
  }

}
