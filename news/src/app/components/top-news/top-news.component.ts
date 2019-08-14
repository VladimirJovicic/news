import { Component, OnInit } from '@angular/core';
import {TopNewsService} from "../../services/top-news/top-news.service"

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.css'],
  providers: [TopNewsService]
})
export class TopNewsComponent implements OnInit {

  private topNews : any = {};
  private loading : boolean = true;
  private noContentMessage : string = "This article has no content!"
  private gbSelectect : boolean = true;
  constructor(private topNewsServices : TopNewsService) { }

  ngOnInit() {
    this.topNewsServices.getTopNews().subscribe(
      (data:any)=> {
        this.topNews = data;
        this.loading = false;
      }
    )
  }

}
