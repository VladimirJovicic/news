import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {
  TOP_NEWS_ENDPOINT_US_ENTERTAINMENT,TOP_NEWS_ENDPOINT_US_GENERAL,
  TOP_NEWS_ENDPOINT_US_HEALTH,TOP_NEWS_ENDPOINT_US_SCIENCE,
  TOP_NEWS_ENDPOINT_US_SPORT,TOP_NEWS_ENDPOINT_US_TECHNOLOGY,
  TOP_NEWS_ENDPOINT_GB_ENTERTAINMENT,TOP_NEWS_ENDPOINT_GB_GENERAL,
  TOP_NEWS_ENDPOINT_GB_HEALTH,TOP_NEWS_ENDPOINT_GB_SCIENCE,
  TOP_NEWS_ENDPOINT_GB_SPORT,TOP_NEWS_ENDPOINT_GB_TECHNOLOGY
} from './../../files/endpoints';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient) { }

  getEntertainmentUS() {
    return this.httpClient.get(TOP_NEWS_ENDPOINT_US_ENTERTAINMENT);
  }

  getGeneralUS() {
    return this.httpClient.get(TOP_NEWS_ENDPOINT_US_GENERAL);
  }

  getHealthUS() {
    return this.httpClient.get(TOP_NEWS_ENDPOINT_US_HEALTH);
  }

  getScienceUS() {
    return this.httpClient.get(TOP_NEWS_ENDPOINT_US_SCIENCE);
  }

  getSportUS() {
    return this.httpClient.get(TOP_NEWS_ENDPOINT_US_SPORT);
  }

  getTechnologyUS() {
    return this.httpClient.get(TOP_NEWS_ENDPOINT_US_TECHNOLOGY);
  }

  getEntertainmentGB() {
    return this.httpClient.get(TOP_NEWS_ENDPOINT_GB_ENTERTAINMENT);
  }

  getGeneralGB() {
    return this.httpClient.get(TOP_NEWS_ENDPOINT_GB_GENERAL);
  }

  getHealthGB() {
    return this.httpClient.get(TOP_NEWS_ENDPOINT_GB_HEALTH);
  }

  getScienceGB() {
    return this.httpClient.get(TOP_NEWS_ENDPOINT_GB_SCIENCE);
  }

  getSportGB() {
    return this.httpClient.get(TOP_NEWS_ENDPOINT_GB_SPORT);
  }

  getTechnologyGB() {
    return this.httpClient.get(TOP_NEWS_ENDPOINT_GB_TECHNOLOGY);
  }
}
