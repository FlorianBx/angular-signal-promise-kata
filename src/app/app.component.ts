import { Component } from '@angular/core';
import { ArticlesComponent } from './components/articles/articles.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ArticlesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'signal-promise-kata';
}
