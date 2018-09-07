import { ListPageComponent } from './list-page/list-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

export * from './list-page/list-page.component';
export * from './not-found-page/not-found-page.component';

export type AnyPageComponent = ListPageComponent | NotFoundPageComponent;

export const pageComponents = [
    ListPageComponent,
    NotFoundPageComponent
];
