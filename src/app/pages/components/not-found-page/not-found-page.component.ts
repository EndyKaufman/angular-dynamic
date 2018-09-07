import { Component, Input, OnInit } from '@angular/core';
import { IPageOptions } from '../../interfaces/page-options.interface';

@Component({
  selector: 'not-found-page',
  templateUrl: './not-found-page.component.html'
})
export class NotFoundPageComponent implements OnInit {
  @Input()
  options: IPageOptions;
  static getType() {
    return 'not-found-page';
  }
  constructor() { }
  ngOnInit() {
  }

}
