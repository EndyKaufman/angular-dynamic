import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IPanelComponent } from '../../interfaces/panel-component.interface';
import { IPanelOptions } from '../../interfaces/panel-options.interface';
import { AnyPageComponent } from '../../../pages/components';
import { Observable } from 'rxjs';
import { GridOptions } from 'ag-grid-community';
import { HttpClient } from '@angular/common/http';
import { AgGridNg2 } from 'ag-grid-angular';

export interface IGridPanelComponent {
  theme: string;
  style: string;
  parent: AnyPageComponent;
  options: IPanelOptions;
  gridOptions: GridOptions;
  gridRef?: AgGridNg2;
  httpClient?: HttpClient;
}
@Component({
  selector: 'grid-panel',
  templateUrl: './grid-panel.component.html'
})
export class GridPanelComponent implements IPanelComponent, IGridPanelComponent, OnInit {
  @ViewChild('gridRef')
  gridRef: AgGridNg2;
  @Input()
  theme: string;
  @Input()
  style: string;
  @Input()
  parent: any;
  @Input()
  options: IPanelOptions;
  @Input()
  gridOptions: GridOptions;
  static getType() {
    return 'grid-panel';
  }
  constructor(
    public httpClient: HttpClient
  ) { }
  ngOnInit() {
    const states = (this.options.states as IGridPanelComponent);
    this.style = states.style;
    this.theme = states.theme;
    this.gridOptions = states.gridOptions;
    if (this.options.resolvers.init) {
      this.options.resolvers.init(this);
    }
    console.log(this.gridRef, states);
  }
}
