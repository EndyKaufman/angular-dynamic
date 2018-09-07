import { Provider } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { of } from 'rxjs';
import { filter } from 'rxjs/operators';
import { IMainBreadcrumbResolver, IMainBreadcrumbStateItem, MAIN_BREADCRUMB_RESOLVERS } from '../states/main-breadcrumb.state';

export class MainBreadcrumbCreateRouterLinkResolver implements IMainBreadcrumbResolver {
    name = 'main-breadcrumb-create-router-link';
    constructor(
        private router: Router
    ) {
        this.router.events.pipe(filter(e => e instanceof NavigationEnd)).
            subscribe(e => {
                console.log(e);
            });
    }
    items(allowedResolvers: any, options: any, items: IMainBreadcrumbStateItem[]) {
        console.log(this, options);
        if (items) {
            items.forEach((item, index) => {
                if (!item.parent) {
                    item.parent = items[index - 1];
                }
                /*if (!item.routerLink) {
                    item.routerLink = items.filter(
                        (filterItem, filterIndex) => filterIndex <= index
                    ).map(
                        mapItem => mapItem.key
                    );
                }*/
            });
        }
        return of(items);
    }
}
export function mainBreadcrumbCreateRouterLinkFactory(
    router: Router
) {
    return new MainBreadcrumbCreateRouterLinkResolver(router);
}
export const mainBreadcrumbCreateRouterLinkProviders: Provider[] = [
    {
        provide: MAIN_BREADCRUMB_RESOLVERS,
        useFactory: mainBreadcrumbCreateRouterLinkFactory,
        deps: [Router],
        multi: true
    }
];
