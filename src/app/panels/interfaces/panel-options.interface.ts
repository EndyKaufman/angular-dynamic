import { IAnyPanelComponent } from '../components';

export interface IPanelOptions {
    type: string;
    resolvers: { [key: string]: any };
    states: { [key: string]: any | IAnyPanelComponent };
}
