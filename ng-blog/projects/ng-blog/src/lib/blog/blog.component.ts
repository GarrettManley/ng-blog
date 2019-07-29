import { Component, OnInit, Input } from '@angular/core';
import { Blog } from './blog.model';

@Component({
  selector: 'ng-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  @Input()
  blog: Blog;

  constructor() {}

  ngOnInit() {}
}
