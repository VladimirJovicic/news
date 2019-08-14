import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TOP_NEWS_ENDPOINT_US, TOP_NEWS_ENDPOINT_GB} from '../../files/endpoints';

@Injectable({
  providedIn: 'root'
})
export class TopNewsService {

  constructor(private httpClient: HttpClient) { }

  getTopNews() {
    return this.httpClient.get(TOP_NEWS_ENDPOINT_GB);
  }
}