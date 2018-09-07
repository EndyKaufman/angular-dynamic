import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { panelComponents } from '../components';
import { IPanelOptions } from '../interfaces/panel-options.interface';

@Component({
  selector: 'dynamic-panel',
  templateUrl: './dynamic-panel.component.html'
})
export class DynamicPanelComponent implements OnInit {
  @Input()
  contentRef: TemplateRef<any>;
  @Input()
  parent: any;
  @Input()
  options: IPanelOptions;
  @Input()
  index: number;
  component$: Observable<any>;
  ngOnInit() {
    const component = panelComponents.filter(panelComponent =>
      this.options && panelComponent.getType() === this.options.type
    )[0];
    if (component) {
      this.component$ = new Observable(observer => {
        observer.next(component);
        observer.complete();
      });
    }
  }
}
