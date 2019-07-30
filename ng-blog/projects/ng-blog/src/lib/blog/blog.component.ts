import { Component, Input, AfterViewChecked } from '@angular/core';
import { IBlog } from './blog.interface';
import * as marked from 'marked';

@Component({
  selector: 'ng-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements AfterViewChecked {
  @Input()
  blog: IBlog;

  constructor() {}

  ngAfterViewChecked(): void {
    document.getElementById(this.blog.postID).innerHTML = marked(this.blog.content);
  }
}
