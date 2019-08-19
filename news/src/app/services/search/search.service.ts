import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_KEY, TOP_HEADLINES} from '../../files/endpoints';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient:HttpClient) { }

  executeQuery(query:string) {
   return this.httpClient.get(TOP_HEADLINES + "?q=" + query.trim() +"&apiKey="+API_KEY)
  }
}
