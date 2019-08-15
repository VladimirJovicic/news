import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TopNewsService {

  constructor(private httpClient: HttpClient) { }

  getTopNews(endpoint:string) {
    return this.httpClient.get(endpoint);
  }
}
