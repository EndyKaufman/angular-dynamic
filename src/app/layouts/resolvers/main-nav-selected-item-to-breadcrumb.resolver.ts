import { Provider } from '@angular/core';
import { of } from 'rxjs';
import { IMainBreadcrumbStateItem, MainBreadcrumbUIStore } from '../states/main-breadcrumb.state';
import { IMainNavResolver, IMainNavStateItem, MAIN_NAV_RESOLVERS } from '../states/main-nav.state';

export class MainNavSelectedItemToBreadcrumbResolver implements IMainNavResolver {
    name = 'main-nav-selected-item-to-breadcrumb';
    constructor(
        private mainBreadcrumbUIStore: MainBreadcrumbUIStore
    ) {
    }
    selectedItem(allowedResolvers: any, options: any, selectedItem: IMainNavStateItem) {
        console.log(this, options);
        if (selectedItem && selectedItem.parent) {
            const breadcrumb: IMainBreadcrumbStateItem[] = [];
            breadcrumb.push({
                key: selectedItem.parent.key,
                caption: selectedItem.parent.caption,
                // routerLink: selectedItem.parent.routerLink
            });
            breadcrumb.push({
                key: selectedItem.key,
                caption: selectedItem.caption,
                // routerLink: selectedItem.routerLink
            });
            this.mainBreadcrumbUIStore.update({ items: breadcrumb });
        }
        return of(selectedItem);
    }
}
export function mainNavSelectedItemToBreadcrumbFactory(
    mainBreadcrumbUIStore: MainBreadcrumbUIStore
) {
    return new MainNavSelectedItemToBreadcrumbResolver(mainBreadcrumbUIStore);
}
export const mainNavSelectedItemToBreadcrumbProviders: Provider[] = [
    {
        provide: MAIN_NAV_RESOLVERS,
        useFactory: mainNavSelectedItemToBreadcrumbFactory,
        deps: [MainBreadcrumbUIStore],
        multi: true
    }
];
