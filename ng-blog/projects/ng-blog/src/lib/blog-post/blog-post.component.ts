import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../core/blog.service';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'ng-blog-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
})
export class BlogPostComponent implements OnInit {
  blog$ = new BehaviorSubject({});
  loading = true;
  error$ = new Subject<string>();

  constructor(private route: ActivatedRoute, private blogService: BlogService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const postID = params.id;
      this.fetchBlogPost(postID);
    });
  }

  private fetchBlogPost(postID: string) {
    this.blogService
      .getBlogAsync(postID)
      .then(blog => {
        if (blog) {
          this.blog$.next(blog);
        } else {
          this.error$.next(`ERROR: Blog Post \`${postID}\` was not found.`);
          this.loading = false;
        }
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        this.loading = false;
      });
  }
}
