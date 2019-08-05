import { Component, Input, AfterViewChecked, AfterContentInit, OnInit } from '@angular/core';
import { IBlog } from './blog.interface';
import * as marked from 'marked';
import { FormControl } from '@angular/forms';
import { BlogService } from '../core/blog.service';

@Component({
  selector: 'ng-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit, AfterContentInit, AfterViewChecked {
  @Input()
  blog: IBlog;

  isEditing = false;
  editor = new FormControl('');

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
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
    this.isEditing = false;

    this.blog.content = this.editor.value.split(/\n/g);
    this.blog.postDate = new Date(Date.now());

    this.blogService.updateBlogAsync(this.blog.postID);
  }

  clickEditBlog() {
    this.isEditing = true;
  }
}
