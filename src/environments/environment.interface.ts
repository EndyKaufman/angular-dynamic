import { ILayoutOptions } from '../app/layouts/interfaces/layout-options.interface';
import { IPageOptions } from '../app/pages/interfaces/page-options.interface';

export interface IEnvironment {
  app: {
    layout: ILayoutOptions;
    pages: IPageOptions[];
  };
  production: boolean;
}
