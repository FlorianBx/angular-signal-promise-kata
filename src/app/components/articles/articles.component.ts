import { Component, signal, effect, WritableSignal } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../Models/article';
import { FormFilterComponent } from '../form-filter/form-filter.component';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [FormFilterComponent],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css',
})
export class ArticlesComponent {
  articles: WritableSignal<Article[]> = signal([]);
  articleId = signal(0);
  userId = signal(0);

  constructor(private articleService: ArticleService) {
    effect(() => {
      if (this.articleId() > 0) {
        this.getArticleById();
      }
    });

    effect(() => {
      if (this.userId() > 0) {
        this.getArticleByUserId();
      }
    });
  }

  async ngOnInit() {
    this.articles.set(await this.articleService.getArticles());
  }

  async getArticleById() {
    this.articles.set([await this.articleService.getArticle(this.articleId())]);
  }

  async getArticleByUserId() {
    this.articles.set(await this.articleService.getArticleByUserId(this.userId()));
  }
}
