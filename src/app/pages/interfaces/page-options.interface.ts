import { IPageStatesOptions } from './page-states.interface';

export interface IPageOptions {
    type: string;
    resolvers: { [key: string]: any };
    states: IPageStatesOptions;
}
