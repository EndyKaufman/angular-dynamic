import { IPanelOptions } from './panel-options.interface';

export interface IPanelComponent {
    options: IPanelOptions;
    parent?: any;
    index?: number;
}
