import { Component, OnInit, OnDestroy } from '@angular/core';
import {SharedService} from "../../services/shared/shared.service"
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit, OnDestroy {

  private article : any = {}
  private urlToNoPhoto ='./../assets/nophoto.jpg'
  private noContent : string = "This article has not content!"
  constructor(private sharedService:SharedService) {
    this.sharedService.lanButtonsDisabled = true;
  }

  ngOnInit() {
    this.article.title = localStorage.getItem("title");
    this.article.content = localStorage.getItem("content");
    this.article.urlToImage = localStorage.getItem("urlToImage");
    console.log(this.article)
  }

  ngOnDestroy() {
    this.sharedService.lanButtonsDisabled = false;
  }

  

}
