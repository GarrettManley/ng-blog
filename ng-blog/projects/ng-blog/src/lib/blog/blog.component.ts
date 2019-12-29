import { AfterContentInit, AfterViewChecked, Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import marked from 'marked';
import { map } from 'rxjs/operators';
import { BlogService } from '../core/blog.service';
import { IBlog } from './blog.interface';

@Component({
	selector: 'ng-blog',
	templateUrl: './blog.component.html',
	styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit, AfterContentInit, AfterViewChecked {
	@Input()
	blog: IBlog;

	@Input()
	loading: boolean;

	private _errorMessage: string;
	public get errorMessage(): string {
		return this._errorMessage;
	}
	@Input()
	public set errorMessage(v: string) {
		this._errorMessage = marked(v ? v : '');
	}

	isEditing = false;
	editError: string = null;
	editor = new FormControl('');

	constructor(private blogService: BlogService, private router: Router, private route: ActivatedRoute) {}

	ngOnInit(): void {
		this.editor.valueChanges.subscribe(() => {
			this.blog.content = this.editor.value.split(/\n/g);
		});

		this.route.queryParamMap
			.pipe(map(params => params.get('editing')))
			.subscribe(value => (this.isEditing = JSON.parse(value)));
	}

	ngAfterContentInit(): void {
		if (this.blog.content) {
			const content = this.blog.content.join('\n');
			this.editor.setValue(content);
		}
	}

	ngAfterViewChecked(): void {
		if (this.blog.content) {
			this.updateBlogContent();
		} else {
			document.getElementById('errors').innerHTML = this.errorMessage;
		}
	}

	updateBlogContent() {
		const blogContent = document.getElementById(this.blog.postID);
		const content = this.blog.content.join('\n');
		this.editor.setValue(content);

		blogContent.innerHTML = marked(content);
	}

	clickEditBlog() {
		this.isEditing = true;
	}

	async clickSaveChanges() {
		await this.load(async () => {
			this.blog.content = this.editor.value.split(/\n/g);
			this.blog.postDate = new Date(Date.now());

			await this.blogService
				.updateBlogAsync(this.blog)
				.then(() => {
					this.isEditing = false;
					this.editError = null;
				})
				.catch(error => {
					this.editError = error.message;
				});
		});
	}

	async clickDeleteBlog() {
		await this.load(async () => {
			await this.blogService
				.deleteBlogAsync(this.blog.postID)
				.then(() => {
					this.router.navigate(['/home']);
				})
				.catch(error => {
					this.editError = error.message;
				});
		});
	}

	async load(callback) {
		this.loading = true;
		await callback();
		this.loading = false;
	}
}
