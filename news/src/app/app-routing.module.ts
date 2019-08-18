import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TopNewsComponent} from "./components/top-news/top-news.component";
import {CategoriesComponent} from "./components/categories/categories.component";
import {ArticleComponent} from './components/article/article.component';
import {CategoryComponent} from './components/category/category.component';

const routes: Routes = [
  { path: '', component: TopNewsComponent, pathMatch:"full" },
  { path: 'top-news/:country', component: TopNewsComponent },
  { path: 'categories/:country', component: CategoriesComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'category/:categoryName/:country', component: CategoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
