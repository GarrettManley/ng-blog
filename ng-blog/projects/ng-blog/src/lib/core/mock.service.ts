import { Injectable } from '@angular/core';
import { LoremIpsum } from 'lorem-ipsum';
import * as uuid from 'uuid/v4';
import { IBlog } from '../blog/blog.interface';

@Injectable({
  providedIn: 'root',
})
export class MockService {
  /**
   * returns an array if lorem impsum paragraphs, formatted in random markdown ways.
   * @param numLines The number of lines to be generated
   */
  public getMarkdownLines(numLines: number = 10): string[] {
    const lorem = new LoremIpsum();
    const lines: string[] = [];

    for (let i = 0; i < numLines; i++) {
      lines.push(`${lorem.generateParagraphs(1)}\n`);
    }

    return lines;
  }

  /**
   * returns a random `IBlog` object
   */
  public getMockBlog(): IBlog {
    const lorem = new LoremIpsum();

    return {
      author: 'Garrett Manley',
      postDate: new Date(Date.now()),
      title: 'Blog Post Title',
      content: [],
      postID: uuid(),
    };
  }
}
