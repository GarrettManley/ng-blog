import { Injectable } from '@angular/core';
import { IBlog } from '../blog/blog.interface';
import { BehaviorSubject } from 'rxjs';
import { MockService } from './mock.service';
import { HttpClientService } from './http-client.service';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  blogs: BehaviorSubject<IBlog[]> = new BehaviorSubject<IBlog[]>([]);
  blogsCache: any;

  config = require('../../../src/ng-blog.config.json');

  constructor(private mock: MockService, private http: HttpClientService) {}

  /**
   * Gets the list of all blog posts
   */
  public async getBlogListAsync() {
    const list = await this.http.getAsync(this.config.api.blogs);
    const array = Object.values<IBlog>(list);

    this.blogs.next(array);
    this.blogsCache = list;
  }

  public async addBlogAsync(blog: IBlog) {
    console.log(this.config.api.blogs);

    await this.http.postAsync(this.config.api.blogs, blog).then(resp => {
      console.log(resp);
      this.getBlogListAsync();
    });
  }

  public async updateBlogAsync(postID) {
    const blogs = this.blogsCache;
    console.log(blogs);

    const keys = Object.keys(blogs);
    console.log(keys);

    const index = Object.values(blogs).findIndex((blog: IBlog) => blog.postID === postID);
    console.log(index);

    this.http.putAsync(this.config.api.updateBlog + keys[index] + '.json', Object.values(blogs)[index]);
  }
}
