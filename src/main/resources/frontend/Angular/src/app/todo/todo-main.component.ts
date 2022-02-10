import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo, TodoGuard } from '../models';
import { TodoService } from '../services/todo.service';
import { TodoComponent } from './todo.component';

@Component({
  selector: 'app-todo-main',
  templateUrl: './todo-main.component.html',
  styleUrls: ['./todo-main.component.css'],
})
export class TodoMainComponent implements OnInit, AfterViewInit, TodoGuard {
  @ViewChild(TodoComponent)
  todoComponent!: TodoComponent;

  tid!: string;
  todo!: Todo;

  valid = false;

  constructor(
    private todoSvc: TodoService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.tid = this.activatedRoute.snapshot.params['tid'];
    console.log('todo-main');
    console.log(this.tid);
  }

  ngAfterViewInit() {
    this.todoSvc.getTodoById(this.tid).then((todo) => {
      this.todo = todo;
      this.todoComponent.resetForm(this.todo);
    });
  }

  formValidity(v: boolean) {
    this.valid = v;
  }

  updateTodo() {
    const t = this.todoComponent.getValue();
    this.todoSvc.updateTodo(t).then(() => {
      this.todoComponent.resetForm();
    });
  }

  deleteTodo() {
    this.todoSvc.deleteTodoById(this.tid).then(this.clearAndGoBack.bind(this));
  }

  clearAndGoBack() {
    this.todoComponent.resetForm();
  }

  evaluate() {
    return this.todoComponent.evaluate();
  }
}
