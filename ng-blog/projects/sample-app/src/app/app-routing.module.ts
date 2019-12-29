import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogPostComponent } from 'projects/ng-blog/src/lib/blog-post/blog-post.component';

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'blog/:id', component: BlogPostComponent },
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: '**', redirectTo: '/home' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
