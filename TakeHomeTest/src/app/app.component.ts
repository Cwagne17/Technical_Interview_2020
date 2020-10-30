import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ApiServiceService } from './api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  httpHeaders = new HttpHeaders;
  input_value: string;
  tasks: any;
  

  constructor(private http_client: HttpClient, private apiService: ApiServiceService){}

  async ngOnInit(){
    this.tasks = await this.apiService.getTasks();
  }

  createTask(){
    this.apiService.createTask(this.input_value).toPromise().then(async () =>{
      this.tasks = await this.apiService.getTasks();
    });
  }

  deleteTask(id: string){
    this.apiService.deleteTask(id).toPromise().then( async ()=>{
      this.tasks = await this.apiService.getTasks();
    });
  }
}
