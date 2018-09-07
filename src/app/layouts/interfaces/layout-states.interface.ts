import { IMainBreadcrumbState } from '../states/main-breadcrumb.state';
import { IMainNavState } from '../states/main-nav.state';

export interface ILayoutStates {
  'main-nav'?: IMainNavState;
  'main-breadcrumb'?: IMainBreadcrumbState;
}
