import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxdModule } from '@ngxd/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { PanelsModule } from '../panels/panels.module';
import { pageComponents } from './components';
import { DynamicPageComponent } from './dynamic-page/dynamic-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: '**',
        component: DynamicPageComponent
      }
    ]),
    NgxdModule,
    NgZorroAntdModule,
    PanelsModule
  ],
  declarations: [
    ...pageComponents,
    DynamicPageComponent
  ],
  exports: [
    RouterModule,
    NgZorroAntdModule,
    ...pageComponents,
    DynamicPageComponent
  ],
  entryComponents: [
    ...pageComponents,
    DynamicPageComponent
  ]
})
export class PagesModule { }
