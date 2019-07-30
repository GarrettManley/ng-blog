import { Component, OnInit } from '@angular/core';
import { BlogService } from '../core/blog.service';
import { Observable, Observer, Subject } from 'rxjs';
import { IBlog } from '../blog/blog.interface';

@Component({
  selector: 'ng-blog-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent implements OnInit {
  constructor(public blogService: BlogService) {}

  ngOnInit() {
    this.blogService.getBlogList();
  }
}
