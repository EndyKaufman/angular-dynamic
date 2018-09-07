import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { pageComponents } from '../components';
import { IPageOptions } from '../interfaces/page-options.interface';

@Component({
  selector: 'dynamic-page',
  templateUrl: './dynamic-page.component.html'
})
export class DynamicPageComponent implements OnInit {
  @Input()
  options: IPageOptions;
  @Input()
  activatedRouteSnapshot$ = new BehaviorSubject<ActivatedRouteSnapshot>(undefined);
  component$: Observable<any>;
  constructor(
    private activatedRoute: ActivatedRoute
  ) {
    activatedRoute.queryParams.subscribe(() => {
      this.activatedRouteSnapshot$.next(this.activatedRoute.snapshot);
      this.ngOnInit();
    });
    activatedRoute.params.subscribe(() => {
      this.activatedRouteSnapshot$.next(this.activatedRoute.snapshot);
      this.ngOnInit();
    });
    activatedRoute.data.subscribe((data: IPageOptions) => {
      this.options = data;
      this.activatedRouteSnapshot$.next(this.activatedRoute.snapshot);
      this.ngOnInit();
    });
  }
  ngOnInit() {
    const component = pageComponents.filter(pageComponent =>
      this.options && pageComponent.getType() === this.options.type
    )[0];
    if (component) {
      this.component$ = new Observable(observer => {
        observer.next(component);
        observer.complete();
      });
    }
  }
}
