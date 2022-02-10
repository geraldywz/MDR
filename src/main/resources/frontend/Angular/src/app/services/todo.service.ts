import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { v4 as uuidv4 } from 'uuid';
import { Todo, TodoSummary } from '../models';

@Injectable()
export class TodoService extends Dexie {
  todo: Dexie.Table<Todo, string>;

  constructor(private todoSvc: TodoService) {
    super('todo-db');
    this.version(1).stores({
      todo: 'tid',
    });

    this.todo = this.table('todo');
    this.populate();
  }

  populate() {
    let summary: TodoSummary[] = [];
    this.getTodoSummary().then((t) => {
      summary = t;
      console.info(summary);
      if (summary.length <= 0) {
        this.addTodo({
          title: 'Walk the dog',
          description: 'Remember to throw the frisbee!',
          priority: 'high',
          tid: '',
        });
        this.addTodo({
          title: 'Do the dishes',
          description: "Don't break any plates!",
          priority: 'med',
          tid: '',
        });
        this.addTodo({
          title: 'Watch Olympics',
          description: "Don't get banned by the sysadmin!",
          priority: 'low',
          tid: '',
        });
      }
    });
  }

  getTodoSummary(): Promise<TodoSummary[]> {
    return this.todo
      .toArray()
      .then((todos) =>
        todos.map((t) => ({ tid: t.tid, title: t.title } as TodoSummary))
      );
  }

  updateTodo(todo: Todo): Promise<string> {
    return this.todo.put(todo);
  }

  addTodo(todo: Todo): Promise<string> {
    todo.tid = uuidv4().toString().substring(0, 8);
    return this.todo.add(todo);
  }
}
