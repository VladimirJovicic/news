import { Component, OnInit } from '@angular/core';
import { CategoryService } from "./../../services/category/category.service";
import { ActivatedRoute,Router,NavigationStart } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  providers: [CategoryService]
})
export class CategoriesComponent implements OnInit {

  private entertainments : any = [];
  private generals : any = [];
  private healths : any = [];
  private science : any = [];
  private sports : any = [];
  private technologies : any = [];

  private loadingEntertainments : boolean = true;
  private loadingGenerals : boolean = true;
  private loadingHealts : boolean = true;
  private loadingScience : boolean = true;
  private loadingSports : boolean = true;
  private loadingTechnologies : boolean = true;

  constructor(private categoryService: CategoryService, private router:Router) {
    router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
        this.ngOnInit();
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
      }
    });
   }

  ngOnInit() {
    if (localStorage.getItem("gbChecked") == "false") {
      this.categoryService.getEntertainmentUS().subscribe(
        (data: any) => {
          this.entertainments = data.articles.slice(0,5);
          this.loadingEntertainments = false;
        });
      this.categoryService.getGeneralUS().subscribe(
        (data: any) => {
          this.generals = data.articles.slice(0,5);
          this.loadingGenerals = false;
        });
      this.categoryService.getHealthUS().subscribe(
        (data: any) => {
          this.healths = data.articles.slice(0,5);
          this.loadingHealts = false;
        });
      this.categoryService.getScienceUS().subscribe(
        (data: any) => {
          this.science= data.articles.slice(0,5);
          this.loadingScience = false;
        });
      this.categoryService.getSportUS().subscribe(
        (data: any) => {
          this.sports = data.articles.slice(0,5);
          this.loadingSports = false;
        });
      this.categoryService.getTechnologyUS().subscribe(
        (data: any) => {
          this.technologies = data.articles.slice(0,5);
          this.loadingTechnologies = false;
        });
    }

    if (localStorage.getItem("gbChecked") == "true") {
      this.categoryService.getEntertainmentGB().subscribe(
        (data: any) => {
          this.entertainments = data.articles.slice(0,5);
          this.loadingEntertainments = false;
        });
      this.categoryService.getGeneralGB().subscribe(
        (data: any) => {
          this.generals = data.articles.slice(0,5);
          this.loadingGenerals = false;
        });
      this.categoryService.getHealthGB().subscribe(
        (data: any) => {
          this.healths = data.articles.slice(0,5);
          this.loadingHealts = false;
        });
      this.categoryService.getScienceGB().subscribe(
        (data: any) => {
          this.science= data.articles.slice(0,5);
          this.loadingScience = false;
        });
      this.categoryService.getSportGB().subscribe(
        (data: any) => {
          this.sports = data.articles.slice(0,5);
          this.loadingSports = false;
        });
      this.categoryService.getTechnologyGB().subscribe(
        (data: any) => {
          this.technologies = data.articles.slice(0,5);
          this.loadingTechnologies = false;
        });
    }


  }

}
