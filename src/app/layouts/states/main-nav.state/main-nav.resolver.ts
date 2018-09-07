import { Inject, Injectable, Optional } from '@angular/core';
import { Observable, of } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { IMainNavStateItem } from './main-nav.store';

export interface IMainNavResolver {
  name: string;
  items?: (allowedResolvers: any, options: any, items: IMainNavStateItem[]) => (Observable<IMainNavStateItem[]>);
  selectedItem?: (allowedResolvers: any, options: any, selectedItem: IMainNavStateItem) => (Observable<IMainNavStateItem>);
  isCollapsed?: (allowedResolvers: any, options: any, value: boolean) => (Observable<boolean>);
}

export const MAIN_NAV_RESOLVERS = 'MainNavResolver';

@Injectable({
  providedIn: 'root'
})
export class MainNavResolver {

  constructor(
    @Optional() @Inject(MAIN_NAV_RESOLVERS) private resolvers: IMainNavResolver[],
  ) { }
  items(allowedResolvers: any, items: IMainNavStateItem[]) {
    let source = of(items);
    if (this.resolvers) {
      Object.keys(allowedResolvers).forEach(key =>
        this.resolvers.filter(resolver => resolver.items && resolver.name === key).forEach(
          resolver =>
            source = source.pipe(
              concatMap(
                (val: IMainNavStateItem[]) => {
                  return resolver.items(allowedResolvers, allowedResolvers[key], val);
                }
              )
            )
        )
      );
    }
    return source;
  }
  selectedItem(allowedResolvers: any, item: IMainNavStateItem) {
    let source = of(item);
    if (this.resolvers) {
      Object.keys(allowedResolvers).forEach(key =>
        this.resolvers.filter(resolver => resolver.selectedItem && resolver.name === key).forEach(
          resolver =>
            source = source.pipe(
              concatMap(
                (val: IMainNavStateItem) => {
                  return resolver.selectedItem(allowedResolvers, allowedResolvers[key], val);
                }
              )
            )
        )
      );
    }
    return source;
  }
  isCollapsed(allowedResolvers: any, value: boolean) {
    let source = of(value);
    if (this.resolvers) {
      Object.keys(allowedResolvers).forEach(key =>
        this.resolvers.filter(resolver => resolver.isCollapsed && resolver.name === key).forEach(
          resolver =>
            source = source.pipe(
              concatMap(
                (val: boolean) => {
                  return resolver.isCollapsed(allowedResolvers, allowedResolvers[key], val);
                }
              )
            )
        )
      );
    }
    return source;
  }
}
