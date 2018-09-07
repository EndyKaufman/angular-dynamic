import { Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { panelComponents } from '../../../panels/components';
import { DynamicPanelComponent } from '../../../panels/dynamic-panel/dynamic-panel.component';
import { IPanelOptions } from '../../../panels/interfaces/panel-options.interface';
import { IPageOptions } from '../../interfaces/page-options.interface';

@Component({
  selector: 'list-page',
  templateUrl: './list-page.component.html'
})
export class ListPageComponent implements OnInit {
  @ViewChildren(DynamicPanelComponent)
  panels: QueryList<DynamicPanelComponent>;
  @Input()
  options: IPageOptions;
  @Input()
  activatedRouteSnapshot$: BehaviorSubject<ActivatedRouteSnapshot>;
  componentsOptions$: Observable<IPanelOptions[]>;
  static getType() {
    return 'list-page';
  }
  ngOnInit() {
    console.log(this, this.options);
    const componentsOptions: IPanelOptions[] = [];
    if (this.options && this.options.states.panels) {
      this.options.states.panels.forEach(panel =>
        panelComponents.forEach(panelComponent => {
          if (panel.type === panelComponent.getType()) {
            componentsOptions.push(panel);
          }
        })
      );
    }
    if (componentsOptions.length) {
      this.componentsOptions$ = new Observable(observer => {
        observer.next(componentsOptions);
        observer.complete();
      });
    }
  }
}
