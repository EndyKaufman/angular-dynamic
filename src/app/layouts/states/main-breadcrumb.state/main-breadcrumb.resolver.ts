import { Inject, Injectable, Optional } from '@angular/core';
import { Observable, of } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { IMainBreadcrumbStateItem } from './main-breadcrumb.store';

export interface IMainBreadcrumbResolver {
  name: string;
  items?: (allowedResolvers: any, options: any, items: IMainBreadcrumbStateItem[]) => (Observable<IMainBreadcrumbStateItem[]>);
  selectedItem?: (allowedResolvers: any, options: any, selectedItem: IMainBreadcrumbStateItem) => (Observable<IMainBreadcrumbStateItem>);
}

export const MAIN_BREADCRUMB_RESOLVERS = 'MainBreadcrumbResolver';

@Injectable({
  providedIn: 'root'
})
export class MainBreadcrumbResolver {
  constructor(
    @Optional() @Inject(MAIN_BREADCRUMB_RESOLVERS) private resolvers: IMainBreadcrumbResolver[]
  ) { }
  items(allowedResolvers: any, items: IMainBreadcrumbStateItem[]) {
    let source = of(items);
    if (this.resolvers) {
      Object.keys(allowedResolvers).forEach(key =>
        this.resolvers.filter(resolver => resolver.items && resolver.name === key).forEach(
          resolver =>
            source = source.pipe(
              concatMap(
                (val: IMainBreadcrumbStateItem[]) => {
                  return resolver.items(allowedResolvers, allowedResolvers[key], val);
                }
              )
            )
        )
      );
    }
    return source;
  }
  selectedItem(allowedResolvers: any, item: IMainBreadcrumbStateItem) {
    let source = of(item);
    if (this.resolvers) {
      Object.keys(allowedResolvers).forEach(key =>
        this.resolvers.filter(resolver => resolver.selectedItem && resolver.name === key).forEach(
          resolver =>
            source = source.pipe(
              concatMap(
                (val: IMainBreadcrumbStateItem) => {
                  return resolver.selectedItem(allowedResolvers, allowedResolvers[key], val);
                }
              )
            )
        )
      );
    }
    return source;
  }
}
