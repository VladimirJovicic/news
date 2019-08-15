import { Component, OnInit } from '@angular/core';
import {SharedService} from './../../services/shared/shared.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private gbChecked;
  private country : string = "";
  constructor(private sharedService : SharedService,private router: Router) {}

  ngOnInit() {
   if(localStorage.getItem("gbChecked") == "true") {
     this.country = "gb";
   }

   if(localStorage.getItem("gbChecked") == "false") {
    this.country = "us";
  }
  }

  activateGB() {
    this.country = "gb";
    this.sharedService.setGbChecker(false)
    this.gbChecked = true;
    localStorage.setItem("gbChecked", "true");
    this.router.navigate(['/top-news/gb']);
  }

  activateUS() {
    this.country = "us";
    this.sharedService.setGbChecker(false)
    this.gbChecked = false;
    localStorage.setItem("gbChecked", "false");
    this.router.navigate(['/top-news/us']);
  }
}
