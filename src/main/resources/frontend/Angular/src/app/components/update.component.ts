import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo, TodoGuard } from '../models';
import { TodoService } from '../services/todo.service';

import { TodoComponent } from './todo.component';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit, AfterViewInit, TodoGuard {
  @ViewChild(TodoComponent)
  todoComponent!: TodoComponent;

  id!: string;
  todo!: Todo;

  valid = false;

  constructor(
    private todoSvc: TodoService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  ngAfterViewInit() {
    this.todoSvc.getTodoById(this.id).then((todo) => {
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
      this.back();
    });
  }

  deleteTodo() {
    this.todoSvc.deleteTodoById(this.id).then(this.clearAndGoBack.bind(this));
    this.router.navigate(['/']);
  }

  clearAndGoBack() {
    this.todoComponent.resetForm();
    this.back();
  }

  back() {
    this.router.navigate(['/']);
  }

  evaluate() {
    return this.todoComponent.evaluate();
  }
}
