import { NgModule } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { BlogListComponent } from './blog-list/blog-list.component';

@NgModule({
  declarations: [NavBarComponent, BlogComponent, BlogListComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavBarComponent, BlogComponent, BlogListComponent],
})
export class NgBlogModule {}
