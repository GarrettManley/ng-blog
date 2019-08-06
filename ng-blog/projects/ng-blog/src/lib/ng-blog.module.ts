import { NgModule } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [NavBarComponent, BlogComponent, BlogListComponent, LoaderComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, HttpClientModule],
  exports: [NavBarComponent, BlogComponent, BlogListComponent],
})
export class NgBlogModule {}
