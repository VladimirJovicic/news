import { Component, OnInit } from '@angular/core';
import { CategoryService } from "../../services/category/category.service"
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { SharedService } from './../../services/shared/shared.service'
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css', '../top-news/top-news.component.css']
})
export class CategoryComponent implements OnInit {

  private topNews: any = {};
  private loading: boolean = true;
  private noContentMessage: string = "This article has no description!"
  private country: string = "";
  private countryName : string = "";
  private endpoint: string = "";
  private category: string = "";

  constructor(private categoryService: CategoryService,
    private sharedService: SharedService,
    private activatedRoute: ActivatedRoute,
    private router:Router) { 
      router.events.forEach((event) => {
        if (event instanceof NavigationStart) {
          this.topNews = {};
          this.loading = true;
          this.country = "";
          this.countryName = "";
          this.endpoint = "";
          this.category = "";
          this.ngOnInit();
        }
      });
    }
  

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.category = params['categoryName'];
      this.country = params['country'];
      console.log(this.category);
      console.log(this.country);
    });

    if(this.country == "us") {
      localStorage.setItem("gbChecked","false")
    }
    if(this.country == "gb") {
      localStorage.setItem("gbChecked","true")
    }

    if (this.country == 'us') {
      this.countryName = "United States";
      if (this.category == "entertainment") {
        this.categoryService.getEntertainmentUS().subscribe(
          (data: any) => {
            this.topNews = data;
            this.loading = false;
          });
      }
      if (this.category == "general") {
        this.categoryService.getGeneralUS().subscribe(
          (data: any) => {
            this.topNews = data;
            this.loading = false;
          });
      }
      if (this.category == "science") {
        this.categoryService.getScienceUS().subscribe(
          (data: any) => {
            this.topNews = data;
            this.loading = false;
          });
      }
      if (this.category == "sport") {
        this.categoryService.getSportUS().subscribe(
          (data: any) => {
            this.topNews = data;
            this.loading = false;
          });
      }
      if (this.category == "technology") {
        this.categoryService.getTechnologyUS().subscribe(
          (data: any) => {
            this.topNews = data;
            this.loading = false;
          });
      }
      if (this.category == "health") {
        this.categoryService.getHealthUS().subscribe(
          (data: any) => {
            this.topNews = data;
            this.loading = false;
          });
      }
    }

    if (this.country == 'gb') {
      this.countryName = "Great Britain";
      if (this.category == "entertainment") {
        this.categoryService.getEntertainmentGB().subscribe(
          (data: any) => {
            this.topNews = data;
            this.loading = false;
          });
      }
      if (this.category == "general") {
        this.categoryService.getGeneralGB().subscribe(
          (data: any) => {
            this.topNews = data;
            this.loading = false;
          });
      }
      if (this.category == "science") {
        this.categoryService.getScienceGB().subscribe(
          (data: any) => {
            this.topNews = data;
            this.loading = false;
          });
      }
      if (this.category == "sport") {
        this.categoryService.getSportGB().subscribe(
          (data: any) => {
            this.topNews = data;
            this.loading = false;
          });
      }
      if (this.category == "technology") {
        this.categoryService.getTechnologyGB().subscribe(
          (data: any) => {
            this.topNews = data;
            this.loading = false;
          });
      }
      if (this.category == "health") {
        this.categoryService.getHealthGB().subscribe(
          (data: any) => {
            this.topNews = data;
            this.loading = false;
          });
      }
    }
  }

  setArticle(news:any) {
    localStorage.setItem("title", news.title);
    localStorage.setItem("content", news.content);
    localStorage.setItem("urlToImage", news.urlToImage);
  }

}
