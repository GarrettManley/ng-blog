import { Component, OnInit, Input } from '@angular/core';
import { IBlog } from './blog.interface';

@Component({
  selector: 'ng-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  @Input()
  blog: IBlog;

  constructor() {}

  ngOnInit() {}
}
