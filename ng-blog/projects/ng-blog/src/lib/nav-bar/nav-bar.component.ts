import { Component, OnInit, Input } from '@angular/core';
import { NavLink } from './nav-link';
import { BlogService } from '../core/blog.service';

@Component({
	selector: 'ng-blog-nav-bar',
	templateUrl: './nav-bar.component.html',
	styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
	@Input()
	title = 'ng-blog';

	@Input()
	navLinks: NavLink[];

	constructor(private blogService: BlogService) {}

	ngOnInit() {}

	async clickNewBlog() {
		this.blogService.createNewBlog();
	}
}
