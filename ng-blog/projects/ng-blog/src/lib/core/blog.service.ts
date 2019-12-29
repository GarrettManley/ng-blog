import { Injectable } from '@angular/core';
import { IBlog } from '../blog/blog.interface';
import { BehaviorSubject } from 'rxjs';
import { MockService } from './mock.service';
import { HttpClientService } from './http-client.service';
import uuid from 'uuid/v4';
import { environment } from 'projects/sample-app/src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class BlogService {
	config = require('../../../src/ng-blog.config.json');

	blogs: BehaviorSubject<IBlog[]> = new BehaviorSubject<IBlog[]>([]);
	blogsCache: any;

	constructor(private mock: MockService, private http: HttpClientService) {}

	/**
	 * Gets the list of all blog posts
	 */
	public async getBlogListAsync(): Promise<IBlog[]> {
		const list = await this.http.getAsync(this.config.api.blogs).catch(error => {
			console.log(error);
			return;
		});

		const array = Object.values<IBlog>(list).sort(this.compareBlogPostDates);

		this.blogs.next(array);
		this.blogsCache = list;

		if (!environment.production) {
			console.log(array);
		}

		return array;
	}

	/**
	 * Generates a new blog post, uploads it to firebase,
	 * and updates the postID to match the firebase entry key
	 */
	public async createNewBlog() {
		const blog: IBlog = this.generateNewBlog();
		const postID = await this.addBlogAsync(blog);

		if (postID) {
			this.updateBlogIDAsync(blog.postID, postID);
		}
	}

	/**
	 * Uploads a blog to the database.
	 * @param blog blog object to upload to firebase
	 */
	public async addBlogAsync(blog: IBlog): Promise<string> {
		return await this.http
			.postAsync(this.config.api.blogs, blog)
			.then(async (resp: any) => {
				await this.getBlogListAsync();
				return resp.name;
			})
			.catch(error => {
				throw error;
			});
	}

	public async updateBlogAsync(blog: IBlog) {
		await this.http.putAsync(this.config.api.updateBlog + blog.postID + '.json', blog).catch(error => {
			throw error;
		});

		await this.getBlogListAsync();
	}

	public async deleteBlogAsync(postID: string) {
		const blogKeyPair = this.getBlogAndKey(postID);

		await this.http.deleteAsync(this.config.api.updateBlog + blogKeyPair.key + '.json').catch(error => {
			throw error;
		});

		await this.getBlogListAsync();
	}

	public async getBlogAsync(postID: string): Promise<IBlog> {
		return await this.http.getAsync(this.config.api.updateBlog + postID + '.json').catch(error => {
			throw error;
		});
	}

	/**
	 * Creates a new blog post
	 */
	private generateNewBlog(): IBlog {
		const tempID = uuid();

		const blog: IBlog = {
			author: this.config.authors.default,
			content: ['# New Blog Post', '', `_by: ${this.config.authors.default}_`],
			postDate: new Date(Date.now()),
			postID: tempID,
		};

		return blog;
	}

	private async updateBlogIDAsync(postID: string, newID: string) {
		const blogKeyPair = this.getBlogAndKey(postID);
		blogKeyPair.blog.postID = newID;

		await this.http
			.putAsync(this.config.api.updateBlog + blogKeyPair.key + '.json', blogKeyPair.blog)
			.catch(error => {
				throw error;
			});

		await this.getBlogListAsync();
	}

	private compareBlogPostDates(a: IBlog, b: IBlog) {
		if (a.postDate > b.postDate) {
			return -1;
		}

		if (a.postDate < b.postDate) {
			return 1;
		}

		return 0;
	}

	private getBlogAndKey(postID: string): IBlogAndKey {
		const blogs = this.blogsCache;
		const keys = Object.keys(blogs);
		const index = Object.values<IBlog>(blogs).findIndex(blog => blog.postID === postID);

		const key = keys[index];
		const blog = Object.values<IBlog>(blogs)[index];

		return {
			blog,
			key,
		};
	}
}

export interface IBlogAndKey {
	blog: IBlog;
	key: string;
}
