import { Component, OnInit } from '@angular/core';
import { BlogService } from '../core/blog.service';

@Component({
  selector: 'ng-blog-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent implements OnInit {
  constructor(public blogService: BlogService) {}

  ngOnInit() {
    this.blogService.getBlogListAsync();
  }
}
