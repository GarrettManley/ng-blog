import { Component } from '@angular/core';
import { NavLink } from 'projects/ng-blog/src/lib/nav-bar/nav-link';

@Component({
  selector: 'blog-sample-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sample-app';
  navLinks: NavLink[] = [{ title: 'link', link: '#' }, { title: 'link', link: '#' }, { title: 'link', link: '#' }];
}
