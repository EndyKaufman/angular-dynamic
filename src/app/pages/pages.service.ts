import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { NotFoundPageComponent } from './components';
import { DynamicPageComponent } from './dynamic-page/dynamic-page.component';
import { IPageOptions } from './interfaces/page-options.interface';

@Injectable({
  providedIn: 'root'
})
export class PagesService {
  constructor(
    private router: Router
  ) { }
  update(options: IPageOptions[]) {
    const routes: Route[] = [];
    options.forEach(pageOptions =>
      pageOptions.states.routes.forEach(pageRoute =>
        routes.push({ path: pageRoute, component: DynamicPageComponent, data: pageOptions })
      )
    );
    routes.push({ path: '**', component: NotFoundPageComponent });
    this.router.resetConfig(routes);
  }
}
