import { mainBreadcrumbCreateRouterLinkProviders } from './main-breadcrumb-create-router-link.resolver';
import { mainNavCreateRouterLinkProviders } from './main-nav-create-router-link.resolver';
import { mainNavSelectedItemToBreadcrumbProviders } from './main-nav-selected-item-to-breadcrumb.resolver';

export * from './main-breadcrumb-create-router-link.resolver';
export * from './main-breadcrumb-create-router-link.resolver';
export * from './main-nav-create-router-link.resolver';
export * from './main-nav-selected-item-to-breadcrumb.resolver';

export const layoutResolversProviders = [
    mainBreadcrumbCreateRouterLinkProviders,
    mainNavCreateRouterLinkProviders,
    mainNavSelectedItemToBreadcrumbProviders
];
