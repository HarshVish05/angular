import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from 'src/Task';

const httpOptions={
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json'
    }
  )
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private API_URL= 'http://localhost:5300/tasks'

  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.API_URL);
   
  }
}
