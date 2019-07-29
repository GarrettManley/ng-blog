import { NgModule } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavBarComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavBarComponent],
})
export class NgBlogModule {}
