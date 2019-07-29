import { Component, OnInit } from '@angular/core';
import { Blog } from 'projects/ng-blog/src/lib/blog/blog.model';

@Component({
  selector: 'blog-sample-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  blog: Blog;
  constructor() {}

  ngOnInit() {
    this.blog = {
      title: 'Test Blog Post',
      content:
        // tslint:disable-next-line: max-line-length
        'Consequat amet adipisicing sunt veniam est nostrud in laboris. Cillum Lorem veniam anim ullamco incididunt. Qui nostrud fugiat voluptate reprehenderit mollit labore fugiat consequat ex sint amet. Est occaecat quis excepteur enim Lorem sit aliquip excepteur ad. Fugiat cillum ex aliquip occaecat ad mollit mollit. Minim eiusmod ut et consequat adipisicing. Commodo ut reprehenderit ex anim et in fugiat. Laborum dolore esse ut commodo mollit. Ea Lorem reprehenderit enim voluptate et ea adipisicing magna. Do deserunt sint do ad eiusmod tempor voluptate nulla reprehenderit.',
      author: 'Garrett Manley',
      postDate: new Date(Date.now()),
    };
  }
}
