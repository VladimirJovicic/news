import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNewsComponent } from './components/top-news/top-news.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ArticleComponent } from './components/article/article.component';
import {SharedService} from './services/shared/shared.service';
import { CategoryComponent } from './components/category/category.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNewsComponent,
    CategoriesComponent,
    NavbarComponent,
    ArticleComponent,
    CategoryComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpClientModule, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
