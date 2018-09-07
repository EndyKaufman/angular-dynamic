import { Injector, Provider } from '@angular/core';
import { of } from 'rxjs';
import { IMainNavResolver, IMainNavStateItem, MAIN_NAV_RESOLVERS } from '../states/main-nav.state';

export class MainNavCreateRouterLinkResolver implements IMainNavResolver {
    name = 'main-nav-create-router-link';
    constructor() { }
    items(allowedResolvers: any, options: any, items: IMainNavStateItem[]) {
        console.log(this, options);
        if (items) {
            items.forEach(parent => {
                parent.routerLink = [parent.key];
                if (parent.children) {
                    parent.children.forEach(item => {
                        item.parent = parent;
                        if (!item.routerLink) {
                            item.routerLink = [parent.key, item.key];
                        }
                    });
                }
            });
        }
        return of(items);
    }
}
export function mainNavCreateRouterLinkFactory() {
    return new MainNavCreateRouterLinkResolver();
}
export const mainNavCreateRouterLinkProviders: Provider[] = [
    {
        provide: MAIN_NAV_RESOLVERS,
        useFactory: mainNavCreateRouterLinkFactory,
        multi: true
    }
];
