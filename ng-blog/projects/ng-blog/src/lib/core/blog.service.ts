import { Injectable } from '@angular/core';
import { IBlog } from '../blog/blog.interface';
import { BehaviorSubject } from 'rxjs';
import { MockService } from './mock.service';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private mock: MockService) {}
  blogs: BehaviorSubject<IBlog[]> = new BehaviorSubject<IBlog[]>([]);

  /**
   * Gets the list of all blog posts
   */
  public getBlogList(): IBlog[] {
    const list: IBlog[] = [];

    // TODO:: Create api to serve this
    for (let i = 0; i < 10; i++) {
      list.push(this.mock.getMockBlog());
    }

    this.blogs.next(list);
    return list;
  }
}
