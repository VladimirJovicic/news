import { Injectable, EventEmitter } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public gbChecked : boolean = false;
  public lanButtonsDisabled : boolean = false;
  constructor() { }

  setGbChecker(newStatus : boolean) {
    this.gbChecked = newStatus;
  }
}
