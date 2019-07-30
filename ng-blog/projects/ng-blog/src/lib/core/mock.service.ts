import { Injectable } from '@angular/core';
import { IBlog } from '../blog/blog.interface';
import * as uuid from 'uuid/v4';
import { LoremIpsum } from 'lorem-ipsum';

@Injectable({
  providedIn: 'root',
})
export class MockService {
  public static getMockBlog(): IBlog {
    const lorem = new LoremIpsum();

    return {
      author: 'Garrett Manley',
      postDate: new Date(Date.now()),
      title: 'How to create an angular library',
      content: lorem.generateParagraphs(3),
      postID: uuid(),
    };
  }
}
