import { Component } from '@angular/core';
import { TodoService } from './services/todo.service';
import { ITodo } from './model/i-todo';
import { Todo } from './model/todo';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'http-and-observables';

  public todos = [];
  public todoAll:Array<Todo> = [];
  public todo:Todo;

  constructor (private todoService:TodoService) {}

  ngOnInit() {

    this.todoService.getTodos().subscribe(data => {
      this.todos = data;
      console.log(data);
    });
    
    this.todoService.getAllTodo()
    .subscribe((data : Array<Todo>) => {
      this.todos = data;
      console.log(data)
    },
    err => {
      if (err instanceof HttpErrorResponse) {
        if (err.status) {
          console.log(err.status);
        }
      }
    });
    
    this.todoService.getAllTodo()
    .subscribe((data : Array<Todo>) => {
      this.todos = data;
      console.log(data);
    }, 
    err => {
      console.log("Didn't get any data!");
    });

    this.todoService.getTodo(654).subscribe(
      data => console.log(data), 
      err => console.log("Invalid Id or Something error on server!")
    );

    this.todoService.getTodo(1).subscribe(
      (data: Todo) => {
        console.log(data);
        this.todo = data;
      }, 
      err => {
        console.log("Invalid Id or Something error on server!");
      }
    );

  }

}
