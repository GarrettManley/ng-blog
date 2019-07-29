import { NgModule } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NavBarComponent],
  imports: [CommonModule],
  exports: [NavBarComponent],
})
export class NgBlogModule {}
