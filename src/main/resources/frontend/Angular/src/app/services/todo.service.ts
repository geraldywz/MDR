import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { lastValueFrom } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

import { Todo, TodoSummary } from '../models';

const URL_POST_API_TODO = '/api/todo';

@Injectable()
export class TodoService extends Dexie {
  todo: Dexie.Table<Todo, string>;

  constructor(private http: HttpClient) {
    super('todo-db');
    this.version(1).stores({
      todo: 'id',
    });

    this.todo = this.table('todo');
  }

  getTodoSummary(): Promise<TodoSummary[]> {
    return this.todo
      .toArray()
      .then((todos) =>
        todos.map((t) => ({ id: t.id, title: t.title } as TodoSummary))
      );
  }

  updateTodo(todo: Todo): Promise<string> {
    return this.todo.put(todo);
  }

  deleteTodoById(id: string): Promise<void> {
    return this.todo.delete(id);
  }

  addTodo(todo: Todo): Promise<string> {
    todo.id = uuidv4().toString().substring(0, 8);
    console.log('I am in todo.services!');

    console.log(todo);
    console.log(lastValueFrom(this.http.post<String>(URL_POST_API_TODO, todo)));
    return this.todo.add(todo);
  }

  getTodoById(id: string): Promise<Todo> {
    return <Promise<Todo>>this.todo.get(id);
  }
}
