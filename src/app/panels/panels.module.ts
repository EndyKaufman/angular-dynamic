import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import { NgxdModule } from '@ngxd/core';
import { AgGridModule } from 'ag-grid-angular';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { panelComponents } from './components';
import { DynamicPanelComponent } from './dynamic-panel/dynamic-panel.component';

@NgModule({
  imports: [
    CommonModule,
    NgxdModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    AgGridModule.withComponents([]),
    FormlyBootstrapModule
  ],
  declarations: [
    ...panelComponents,
    DynamicPanelComponent
  ],
  exports: [
    NgZorroAntdModule,
    ...panelComponents,
    DynamicPanelComponent
  ],
  entryComponents: [
    ...panelComponents,
    DynamicPanelComponent
  ]
})
export class PanelsModule { }
