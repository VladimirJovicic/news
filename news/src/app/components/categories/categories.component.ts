import { Component, OnInit } from '@angular/core';
import { CategoryService } from "./../../services/category/category.service";
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import {SharedService} from './../../services/shared/shared.service'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  providers: [CategoryService]
})
export class CategoriesComponent implements OnInit {

  private noContentMessage: string = "This article has no content!"
  private scrollLeftMovement: number = 100;

  private entertainments: any = [];
  private generals: any = [];
  private healths: any = [];
  private science: any = [];
  private sports: any = [];
  private technologies: any = [];

  private loadingEntertainments: boolean = true;
  private loadingGenerals: boolean = true;
  private loadingHealts: boolean = true;
  private loadingScience: boolean = true;
  private loadingSports: boolean = true;
  private loadingTechnologies: boolean = true;

  private entertainmentsCollapse: boolean = false;
  private generalsCollapse: boolean = false;
  private healtsCollapse: boolean = false;
  private scienceCollapse: boolean = false;
  private sportsCollapse: boolean = false;
  private technologiesCollapse: boolean = false;

  private country: string = "";

  constructor(private categoryService: CategoryService, 
    private router: Router, 
    private activatedRoute:ActivatedRoute,
    private sharedService:SharedService) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.activatedRoute.params.subscribe(params => {
          if(params['country'] == "us") {
            this.sharedService.gbChecked = false;
            this.country = "us";
          }
          if(params['country'] == "gb") {
            this.sharedService.gbChecked = true;
            this.country = "gb";
          }
        });
        this.entertainments = [];
        this.generals = [];
        this.healths = [];
        this.science = [];
        this.sports = [];
        this.technologies = [];

        this.loadingEntertainments = true;
        this.loadingGenerals = true;
        this.loadingHealts = true;
        this.loadingScience = true;
        this.loadingSports = true;
        this.loadingTechnologies = true;
        this.ngOnInit();
      }
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.country = params['country'];
      if(params['country'] == "us") {
        this.sharedService.gbChecked = false;
        this.country = "us";
      }
      if(params['country'] == "gb") {
        this.sharedService.gbChecked = true;
        this.country = "gb";
      }
    });
    if (!this.sharedService.gbChecked) {
      this.categoryService.getEntertainmentUS().subscribe(
        (data: any) => {
          this.entertainments = data.articles.slice(0, 5);
          this.loadingEntertainments = false;
        });
      this.categoryService.getGeneralUS().subscribe(
        (data: any) => {
          this.generals = data.articles.slice(0, 5);
          this.loadingGenerals = false;
        });
      this.categoryService.getHealthUS().subscribe(
        (data: any) => {
          this.healths = data.articles.slice(0, 5);
          this.loadingHealts = false;
        });
      this.categoryService.getScienceUS().subscribe(
        (data: any) => {
          this.science = data.articles.slice(0, 5);
          this.loadingScience = false;
        });
      this.categoryService.getSportUS().subscribe(
        (data: any) => {
          this.sports = data.articles.slice(0, 5);
          this.loadingSports = false;
        });
      this.categoryService.getTechnologyUS().subscribe(
        (data: any) => {
          this.technologies = data.articles.slice(0, 5);
          this.loadingTechnologies = false;
        }); 
    }

    if (this.sharedService.gbChecked) {
      this.categoryService.getEntertainmentGB().subscribe(
        (data: any) => {
          this.entertainments = data.articles.slice(0, 5);
          this.loadingEntertainments = false;
        });
      this.categoryService.getGeneralGB().subscribe(
        (data: any) => {
          this.generals = data.articles.slice(0, 5);
          this.loadingGenerals = false;
        });
      this.categoryService.getHealthGB().subscribe(
        (data: any) => {
          this.healths = data.articles.slice(0, 5);
          this.loadingHealts = false;
        });
      this.categoryService.getScienceGB().subscribe(
        (data: any) => {
          this.science = data.articles.slice(0, 5);
          this.loadingScience = false;
        });
      this.categoryService.getSportGB().subscribe(
        (data: any) => {
          this.sports = data.articles.slice(0, 5);
          this.loadingSports = false;
        });
      this.categoryService.getTechnologyGB().subscribe(
        (data: any) => {
          this.technologies = data.articles.slice(0, 5);
          this.loadingTechnologies = false;
        });
    }
  }

  moveLeft(articleId: string) {
    const left = document.getElementById(articleId).scrollLeft;
    document.getElementById(articleId).scrollLeft = left - this.scrollLeftMovement;
  }

  moveRight(articleId: string) {
    const left = document.getElementById(articleId).scrollLeft;
    document.getElementById(articleId).scrollLeft = left + this.scrollLeftMovement;
  }

  setArticle(news: any) {
    localStorage.setItem("title", news.title);
    localStorage.setItem("content", news.content);
    localStorage.setItem("urlToImage", news.urlToImage);
  }

  getCollapseUrl() {
    return "url('../assets/collapse.png')"
  }

  getExpandeUrl() {
    return "url('../assets/expand.png')"
  }

  collapseExpand(keyword: string) {
    switch (keyword) {
      case "entertainment":
        this.entertainmentsCollapse = !this.entertainmentsCollapse;
        break;

      case "general":
        this.generalsCollapse = !this.generalsCollapse;
        break;

      case "sport":
        this.sportsCollapse = !this.sportsCollapse;
        break;

      case "science":
        this.scienceCollapse = !this.scienceCollapse;
        break;

      case "health":
        this.healtsCollapse = !this.healtsCollapse;
        break;

      case "technology":
        this.technologiesCollapse = !this.technologiesCollapse;
        break;
    }

  }


}
