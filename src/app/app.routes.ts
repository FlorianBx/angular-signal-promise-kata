import { Routes } from '@angular/router';
import { ArticlesComponent } from './components/articles/articles.component';
import { ListOfCatsComponent } from './components/list-of-cats/list-of-cats.component';

export const routes: Routes = [
  { path: '', redirectTo: 'cats', pathMatch: 'full' },
  { path: 'cats', component: ListOfCatsComponent },
  { path: 'articles', component: ArticlesComponent },
];
