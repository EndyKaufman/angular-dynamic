import { Component, Input, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { Observable } from 'rxjs';
import { LayoutsService } from '../../layouts.service';
import { IMainBreadcrumbStateItem, MainBreadcrumbService, MainBreadcrumbUIQuery } from '../../states/main-breadcrumb.state';
import { IMainNavStateItem, MainNavService, MainNavUIQuery } from '../../states/main-nav.state';
import { ILayoutOptions } from '../../interfaces/layout-options.interface';

@AutoUnsubscribe()
@Component({
  selector: 'sidenav-layout',
  templateUrl: './sidenav-layout.component.html',
  styleUrls: ['./sidenav-layout.component.scss']
})
export class SidenavLayoutComponent implements OnInit, OnDestroy {
  @Input()
  contentRef: TemplateRef<any>;
  @Input()
  options: ILayoutOptions;
  mainNavSelectedItem$: Observable<IMainNavStateItem>;
  mainNavItems$: Observable<IMainNavStateItem[]>;
  mainNavTheme$: Observable<string>;
  mainNavIsCollapsed$: Observable<boolean>;
  mainNavIsCollapsed: boolean;
  mainBreadcrumbStateItems$: Observable<IMainBreadcrumbStateItem[]>;
  mainBreadcrumbSelectedItem$: Observable<IMainBreadcrumbStateItem>;
  static getType() {
    return 'sidenav-layout';
  }
  constructor(
    private mainNavUIQuery: MainNavUIQuery,
    private mainNavService: MainNavService,
    private mainBreadcrumbUIQuery: MainBreadcrumbUIQuery,
    private mainBreadcrumbService: MainBreadcrumbService,
    private layoutsService: LayoutsService
  ) { }
  ngOnInit() {
    this.mainNavItems$ = this.mainNavUIQuery.select(state => state.items);
    this.mainNavTheme$ = this.mainNavUIQuery.select(state => state.theme);
    this.mainNavSelectedItem$ = this.mainNavUIQuery.select(state => state.selectedItem);
    this.mainNavIsCollapsed$ = this.mainNavUIQuery.select(state => state.isCollapsed);
    this.mainBreadcrumbStateItems$ = this.mainBreadcrumbUIQuery.select(state => state.items);
    this.mainBreadcrumbSelectedItem$ = this.mainBreadcrumbUIQuery.select(state => state.selectedItem);
    this.mainNavIsCollapsed$.subscribe(isCollapsed => this.mainNavIsCollapsed = isCollapsed);
    this.layoutsService.update(
      this.options
    );
    console.log(this);
  }
  ngOnDestroy() {
    // AutoUnsubscribe
  }
  mainNavToggleIsCollapsed() {
    this.mainNavUIQuery.selectOnce(state => state.isCollapsed).subscribe(value =>
      this.mainNavService.updateIsCollapsed(this.options.resolvers, !value)
    );
  }
  mainNavUpdateSelectedItem(item: IMainNavStateItem) {
    this.mainNavService.updateSelectedItem(this.options.resolvers, item);
  }
  mainBreadcrumbUpdateSelectedItem(item: IMainBreadcrumbStateItem) {
    this.mainBreadcrumbService.updateSelectedItem(this.options.resolvers, item);
  }
}
