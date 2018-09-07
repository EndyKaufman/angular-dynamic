import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxdModule } from '@ngxd/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { layoutComponents } from './components';
import { DynamicLayoutComponent } from './dynamic-layout/dynamic-layout.component';
import { layoutResolversProviders } from './resolvers';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgxdModule,
    NgZorroAntdModule
  ],
  declarations: [
    ...layoutComponents,
    DynamicLayoutComponent
  ],
  exports: [
    RouterModule,
    NgZorroAntdModule,
    ...layoutComponents,
    DynamicLayoutComponent
  ],
  entryComponents: [
    ...layoutComponents,
    DynamicLayoutComponent
  ],
  providers: [
    ...layoutResolversProviders
  ]
})
export class LayoutsModule { }
