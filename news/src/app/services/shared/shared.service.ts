import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public gbChecked : boolean = false;
  constructor() { }

  setGbChecker(newStatus : boolean) {
    this.gbChecked = newStatus;
    if(this.gbChecked) {
      localStorage.setItem("gbChecked", "true")
    }else {
      localStorage.setItem("gbChecked", "false")
    }
  }
}
