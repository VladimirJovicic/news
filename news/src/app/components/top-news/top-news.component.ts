import { Component, OnInit } from '@angular/core';
import {TopNewsService} from "../../services/top-news/top-news.service"
import { ActivatedRoute,Router,NavigationStart } from '@angular/router';
import {TOP_NEWS_ENDPOINT_US, TOP_NEWS_ENDPOINT_GB} from '../../files/endpoints';
import {SharedService} from './../../services/shared/shared.service'

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.css'],
  providers: [TopNewsService]
})
export class TopNewsComponent implements OnInit {

  private topNews : any = {};
  private loading : boolean = true;
  private noContentMessage : string = "This article has no description!"
  private country : string = "";
  private endpoint : string = "";
  constructor(private topNewsServices : TopNewsService,
    private activatedRoute: ActivatedRoute, 
    private sharedService:SharedService,
    private router:Router) { 
      router.events.forEach((event) => {
        if(event instanceof NavigationStart) {
          this.loading = true;
          this.topNews = {};
          this.activatedRoute.params.subscribe(params => {
            this.country = params['country'];
            if(params['country'] == "us") {
              this.sharedService.gbChecked = false;
            }
            if(params['country'] == "gb") {
              this.sharedService.gbChecked = true;
            }
          });
          this.ngOnInit();
        }
      });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.country = params['country'];
    });
    if(this.country == "gb") {
      this.endpoint = TOP_NEWS_ENDPOINT_GB;
      this.sharedService.gbChecked = true;
    }
 
    if(this.country == "us") {
     this.endpoint = TOP_NEWS_ENDPOINT_US;
     this.sharedService.gbChecked = false;
   }
        this.topNewsServices.getTopNews(this.endpoint).subscribe(
      (data:any)=> {
        this.topNews = data;
        this.loading = false;
      }
    )
  }

  setArticle(news:any) {
    localStorage.setItem("title", news.title);
    localStorage.setItem("content", news.content);
    localStorage.setItem("urlToImage", news.urlToImage);
  }

}
