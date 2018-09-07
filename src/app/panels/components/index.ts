import { FormPanelComponent, IFormPanelComponent } from './form-panel/form-panel.component';
import { GridPanelComponent, IGridPanelComponent } from './grid-panel/grid-panel.component';

export * from './form-panel/form-panel.component';
export * from './grid-panel/grid-panel.component';

export type IAnyPanelComponent = IFormPanelComponent | IGridPanelComponent;

export const panelComponents = [
    FormPanelComponent,
    GridPanelComponent
];
