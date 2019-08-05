import { Injectable } from '@angular/core';
import { IBlog } from '../blog/blog.interface';
import { BehaviorSubject } from 'rxjs';
import { MockService } from './mock.service';
import { HttpClientService } from './http-client.service';
import * as uuid from 'uuid/v4';

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
    try {
      const list = await this.http.getAsync(this.config.api.blogs);
      const array = Object.values<IBlog>(list);

      this.blogs.next(array);
      this.blogsCache = list;
    } catch (error) {
      console.log(error);
    }
  }

  public async createNewBlog() {
    const blog: IBlog = {
      author: 'Garrett Manley',
      content: ['# New Blog Post', '', '_by: Garrett Manley_'],
      postDate: new Date(Date.now()),
      postID: uuid(),
    };

    this.addBlogAsync(blog).then(resp => {
      console.log(resp);
    });
  }

  public async addBlogAsync(blog: IBlog) {
    console.log(this.config.api.blogs);

    return this.http.postAsync(this.config.api.blogs, blog).then((resp: any) => {
      this.getBlogListAsync();
      return resp.name;
    });
  }

  public async updateBlogAsync(postID) {
    const blogs = this.blogsCache;
    const keys = Object.keys(blogs);
    const index = Object.values<IBlog>(blogs).findIndex(blog => blog.postID === postID);

    const key = keys[index];
    const blog = Object.values<IBlog>(blogs)[index];

    blog.postID = key;

    this.http.putAsync(this.config.api.updateBlog + +'.json', blog);
  }
}
