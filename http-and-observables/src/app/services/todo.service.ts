import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITodo } from '../model/i-todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private _url: string = "https://jsonplaceholder.typicode.com/todos";

  constructor(private http: HttpClient) { }

  getAllTodo() {
    return this.http.get(this._url);
  }

  getTodo(id) {
    return this.http.get(this._url + "/" + id);
  }

  getTodos():Observable<ITodo[]> {
    return this.http.get<ITodo[]>(this._url);
  }

}
