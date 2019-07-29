import { NgModule } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [NavBarComponent, BlogComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavBarComponent, BlogComponent],
})
export class NgBlogModule {}
