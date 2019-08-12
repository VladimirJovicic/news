import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TopNewsComponent} from "./components/top-news/top-news.component";
import {CategoriesComponent} from "./components/categories/categories.component";
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: '', component: HomepageComponent, pathMatch:"full" },
  { path: 'top-news', component: TopNewsComponent },
  { path: 'categories', component: CategoriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
