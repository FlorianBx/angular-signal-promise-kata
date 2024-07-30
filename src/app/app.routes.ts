import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ListOfCatsComponent } from './components/list-of-cats/list-of-cats.component';
import { ListOfUsersComponent } from './components/list-of-users/list-of-users.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cats', component: ListOfCatsComponent },
  { path: 'users', component: ListOfUsersComponent },
  { path: 'articles', component: ArticlesComponent },
];
