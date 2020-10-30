import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private webReqService: WebRequestService) {}

  createTask(task: string){
    return this.webReqService.post('/', {"task": task});
  }

  getTasks(){
    return this.webReqService.get("/tasks").toPromise();
  }

  deleteTask(id: string){
    return this.webReqService.delete(`/delete/${encodeURIComponent(id)}`);
  }
}
