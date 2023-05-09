import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-blog-control',
  templateUrl: './blog-control.component.html',
  styleUrls: ['./blog-control.component.css']
})
export class BlogControlComponent {
  @Output() articleCreated = new EventEmitter<{ articleTitle: string, articleContent: string }>();
  @Output() brouillonCreated = new EventEmitter<{ articleTitle: string, articleContent: string }>();

  newArticleTitle: string = '';
  newArticleContent: string = '';

  onAddArticle() {
    this.articleCreated.emit({
      articleTitle: this.newArticleTitle,
      articleContent: this.newArticleContent
    });
  }

  onAddBrouillon() {
    this.brouillonCreated.emit({
      articleTitle: this.newArticleTitle,
      articleContent: this.newArticleContent
    });
  }
}
