import { Component, Input, AfterViewChecked, AfterContentInit, OnInit } from '@angular/core';
import { IBlog } from './blog.interface';
import * as marked from 'marked';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ng-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit, AfterContentInit, AfterViewChecked {
  @Input()
  blog: IBlog;

  editor = new FormControl('');

  constructor() {}

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    this.editor.valueChanges.subscribe(() => {
      this.blog.content = this.editor.value.split(/\n/g);
    });
  }

  ngAfterContentInit(): void {
    let content = '';

    for (const line of this.blog.content) {
      content += `${line}\n`;
    }
    this.editor.setValue(content);
  }

  ngAfterViewChecked(): void {
    this.updateBlogContent(this.blog.content);
  }

  updateBlogContent(lines: string[]) {
    const blogContent = document.getElementById(this.blog.postID);
    let content = '';

    for (const line of lines) {
      content += `${line}\n`;
    }

    blogContent.innerHTML = marked(content);
  }

  clickSaveChanges() {
    this.blog.content = this.editor.value.split(/\n/g);
    this.blog.postDate = new Date(Date.now());
  }
}
