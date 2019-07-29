import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ng-blog-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  @Input()
  title = 'ng-blog';

  constructor() {}

  ngOnInit() {}
}
