import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../services/search/search.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css', '../top-news/top-news.component.css'],
  providers: [SearchService]
})
export class SearchComponent implements OnInit {

  private query:string = "";
  private searchResults : any = {};
  private loading : boolean = false;
  private showResults : boolean = false;
  private displayQuery:string = ""; // to avoid two way binding in case that there is no results
  constructor(private searchService:SearchService) {
   }

  ngOnInit() {
  }

  submitForm(event: Event) {
    event.preventDefault();
    if(this.query.trim() == "") {
      alert("Molimo Vas unesite upit za pretragu")
    }else {
      this.displayQuery=this.query;
      this.loading = true;
      this.showResults = false;
      this.searchService.executeQuery(this.query).subscribe(
        (data:any)=> {
          this.showResults = true;
          this.loading = false;
          this.searchResults = data.articles
        }
      )
    }
  }

  setArticle(news:any) {
    localStorage.setItem("title", news.title);
    localStorage.setItem("content", news.content);
    localStorage.setItem("urlToImage", news.urlToImage);
  }

}
