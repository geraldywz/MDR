import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

import { Todo, TodoSummary } from '../models';

const URL_POST_API_TODO = '/api/todo';

@Injectable()
export class TodoService2 {
  constructor(private http: HttpClient) {}

  getTodoSummary(): Promise<TodoSummary[]> {
    return lastValueFrom(this.http.get<TodoSummary[]>(URL_POST_API_TODO));
  }

  updateTodo(todo: Todo): Promise<string> {
    return lastValueFrom(this.http.post<string>(URL_POST_API_TODO, todo)); // TO DO
  }

  deleteTodoById(tid: string): Promise<void> {
    return lastValueFrom(this.http.post<void>(URL_POST_API_TODO, tid)); // TO DO
  }

  addTodo(todo: Todo): Promise<string> {
    todo.tid = uuidv4().toString().substring(0, 8);
    console.log('I am here!');

    console.log(todo);
    return lastValueFrom(this.http.post<string>(URL_POST_API_TODO, todo));
    // return this.todo.add(todo);
  }

  getTodoById(tid: string): Promise<Todo> {
    return lastValueFrom(this.http.get<Todo>(URL_POST_API_TODO)); // TO DO
  }
}
