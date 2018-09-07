import { ILayoutStates } from './layout-states.interface';

export interface ILayoutOptions {
    type: string;
    resolvers: { [key: string]: any };
    states: ILayoutStates;
}
