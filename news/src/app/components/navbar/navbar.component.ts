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
  constructor(private sharedService: SharedService, private router: Router, private activatedRoute: ActivatedRoute) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (localStorage.getItem("gbChecked") == null) {
          this.activateGB();
          this.sharedService.gbChecked = true;
        }
      }
    });
  }

  ngOnInit() {
    if (localStorage.getItem("gbChecked") == "true") {
      this.country = "gb";
      this.sharedService.gbChecked = true;
    }

    if (localStorage.getItem("gbChecked") == "false") {
      this.country = "us";
      this.sharedService.gbChecked = false;
    }
  }

  activateGB() {
    this.country = "gb";
    this.sharedService.gbChecked=true;
    this.gbChecked = true;
    localStorage.setItem("gbChecked", "true");
    if (this.router.url.split("/")[1] == "categories") {
      this.router.navigate(['/categories/gb']);
    }
    if (this.router.url.split("/")[1] == "top-news") {
      this.router.navigate(['/top-news/gb']);
    }
    if (this.router.url.split("/")[1] == "category") {
      this.router.navigate(['/category/' + this.router.url.split("/")[2] + "/gb"]);
    }
  }

  activateUS() {
    console.log(this.router.url)
    this.country = "us";
    this.sharedService.gbChecked=false;
    this.gbChecked = false;
    localStorage.setItem("gbChecked", "false");
    if (this.router.url.split("/")[1] == "categories") {
      this.router.navigate(['/categories/us']);
    }
    if (this.router.url.split("/")[1] == "top-news") {
      this.router.navigate(['/top-news/us']);
    }
    if (this.router.url.split("/")[1] == "category") {
      const categoryName = this.router.url.split("/")[2];
      this.router.navigate(['/category/' + categoryName + '/us']);
      }
  }
}
