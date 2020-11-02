import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly ROOT_URL;

  constructor(private http: HttpClient) {
    this.ROOT_URL = "http://localhost:3000";
  }

  get(url: string){
    return this.http.get((this.ROOT_URL)+(url));
  }

  post(url: string, obj: Object){
    return this.http.post((this.ROOT_URL)+(url), obj, {responseType: 'json'});
  }

  patch(url: string, obj: Object){
    return this.http.post((this.ROOT_URL)+(url), obj);
  }

  delete(url: string){
    return this.http.delete((this.ROOT_URL)+(url), {responseType: 'text'})
  }


}
