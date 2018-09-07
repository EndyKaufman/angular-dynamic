import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { layoutComponents } from '../components';
import { ILayoutOptions } from '../interfaces/layout-options.interface';

@Component({
  selector: 'dynamic-layout',
  templateUrl: './dynamic-layout.component.html'
})
export class DynamicLayoutComponent implements OnInit {
  @Input()
  contentRef: TemplateRef<any>;
  @Input()
  options: ILayoutOptions;
  component$: Observable<any>;
  ngOnInit() {
    const component = layoutComponents.filter(layoutComponent =>
      this.options && layoutComponent.getType() === this.options.type
    )[0];
    if (component) {
      this.component$ = new Observable(observer => {
        observer.next(component);
        observer.complete();
      });
    }
  }
}
