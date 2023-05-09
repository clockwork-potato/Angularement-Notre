import { Component } from '@angular/core';

@Component({
  selector: 'app-exo-emit',
  templateUrl: './exo-emit.component.html',
  styleUrls: ['./exo-emit.component.css']
})
export class ExoEmitComponent {
  mesArticles = [
    {
      type: 'article',
      title: 'Article de test',
      content: 'Contenu de test'
    }
  ];

  onArticleAdded(articleData: { articleTitle: string, articleContent: string }) {
    this.mesArticles.push({
      type: 'article',
      title: articleData.articleTitle,
      content: articleData.articleContent
    });
  }

  onBrouillonAdded(brouillonData: { articleTitle: string, articleContent: string }) {
    this.mesArticles.push({
      type: 'brouillon',
      title: brouillonData.articleTitle,
      content: brouillonData.articleContent
    });
  }
}

