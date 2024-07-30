import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  async getArticles() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error('Failed to fetch articles');
    }
    const data = await response.json();
    return data;
  }

  async getArticle(id: number) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch article');
    }
    const data = await response.json();
    return data;
  }

  async getArticleByUserId(id: number) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch article');
    }
    const data = await response.json();
    return data;
  }
}
