import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { LayoutsService } from './layouts/layouts.service';
import { PagesService } from './pages/pages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-dynamic';
  layout = environment.app.layout;
  constructor(
    layoutsService: LayoutsService,
    pagesService: PagesService,
  ) {
    pagesService.update(environment.app.pages);
  }
}
