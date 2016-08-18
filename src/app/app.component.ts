import { Component } from '@angular/core';
import { MenuComponent } from './menu/';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ MenuComponent ]
})
export class AppComponent {
  title = 'app works!';
  description = 'this is not the greatest app in the world'
}
