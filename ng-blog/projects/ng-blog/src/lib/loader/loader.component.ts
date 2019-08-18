import { Component, Input } from '@angular/core';

@Component({
  selector: 'ng-blog-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  @Input()
  hidden: boolean;
}
