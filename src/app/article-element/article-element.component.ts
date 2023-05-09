import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article-element',
  templateUrl: './article-element.component.html',
  styleUrls: ['./article-element.component.css']
})
export class ArticleElementComponent {
  @Input() element: { type: string, title: string, content: string } = {
    type: '',
    title: '',
    content: ''
  };
}