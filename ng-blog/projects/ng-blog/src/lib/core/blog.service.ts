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
  public async getBlogListAsync(): Promise<IBlog[]> {
    const list = await this.http.getAsync(this.config.api.blogs).catch(error => {
      console.log(error);
      return;
    });

    const array = Object.values<IBlog>(list);

    this.blogs.next(array);
    this.blogsCache = list;
    return array;
  }

  public async createNewBlog() {
    const tempID = uuid();

    const blog: IBlog = {
      author: 'Garrett Manley',
      content: ['# New Blog Post', '', '_by: Garrett Manley_'],
      postDate: new Date(Date.now()),
      postID: tempID,
    };

    const newID = await this.addBlogAsync(blog);

    // await this.updateBlogAsync(tempID, newID);
  }

  public async addBlogAsync(blog: IBlog): Promise<string> {
    return await this.http.postAsync(this.config.api.blogs, blog).then((resp: any) => {
      this.getBlogListAsync();
      return resp.name;
    });
  }

  public async updateBlogAsync(postID: string, newID: string = null) {
    const blogs = this.blogsCache;
    const keys = Object.keys(blogs);
    const index = Object.values<IBlog>(blogs).findIndex(blog => blog.postID === postID);

    const key = keys[index];
    const blog = Object.values<IBlog>(blogs)[index];

    if (newID !== null) {
      blog.postID = newID;
    }

    await this.http.putAsync(this.config.api.updateBlog + key + '.json', blog).catch(error => {
      throw error;
    });
  }
}
