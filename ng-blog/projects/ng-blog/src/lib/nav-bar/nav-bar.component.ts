import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from '../core/blog.service';
import { NavLink } from './nav-link';

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

	constructor(private blogService: BlogService, private router: Router) {}

	ngOnInit() {}

	clickNewBlog() {
		this.blogService.createNewBlog().then(id => {
			this.router.navigate([`/blog/${id}`]);
		});
	}
}
