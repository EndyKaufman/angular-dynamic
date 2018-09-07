import { Injectable } from '@angular/core';
import { ILayoutOptions } from './interfaces/layout-options.interface';
import { MainBreadcrumbService } from './states/main-breadcrumb.state';
import { MainNavService } from './states/main-nav.state';



@Injectable({
  providedIn: 'root'
})
export class LayoutsService {
  constructor(
    private mainNavService: MainNavService,
    private mainBreadcrumbService: MainBreadcrumbService
  ) { }
  update(options: ILayoutOptions) {
    this.mainBreadcrumbService.update(options.resolvers, options.states['main-breadcrumb']);
    this.mainNavService.update(options.resolvers, options.states['main-nav']);
  }
}
