import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedService } from './../../services/shared/shared.service'
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private gbChecked: boolean = true;
  private country: string = "";
  constructor(private sharedService: SharedService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.sharedService.gbChecked ? this.country = "gb" : this.country = "us";
  }

  activateGB() {
    this.country = "gb";
    if (this.router.url.split("/")[1] == "top-news") {
      this.router.navigate(['/top-news/gb']);
      this.sharedService.gbChecked = true;
    }
    if (this.router.url.split("/")[1] == "categories") {
      this.router.navigate(['/categories/gb']);
      this.sharedService.gbChecked = true;
    }

    if (this.router.url.split("/")[1] == "category") {
      this.router.navigate(['/category/' + this.router.url.split("/")[2] + "/gb"]);
      this.sharedService.gbChecked = true;
    }
  }

  activateUS() {
    this.sharedService.gbChecked = false;
    this.country = "us";
    if (this.router.url.split("/")[1] == "top-news") {
      this.router.navigate(['/top-news/us']);
      this.sharedService.gbChecked = false;
    }
    if (this.router.url.split("/")[1] == "categories") {
      this.router.navigate(['/categories/us']);
      this.sharedService.gbChecked = false;
    }

    if (this.router.url.split("/")[1] == "category") {
      const categoryName = this.router.url.split("/")[2];
      this.router.navigate(['/category/' + categoryName + '/us']);
      this.sharedService.gbChecked = false;
      }
  }
}
