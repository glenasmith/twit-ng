import { Component } from '@angular/core';
import { FeedComponent } from './feed';
import { MenuComponent } from './menu';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ FeedComponent, MenuComponent ]
})
export class AppComponent {
  title = 'app works!';
  description = 'this is not the greatest app in the world'
}
