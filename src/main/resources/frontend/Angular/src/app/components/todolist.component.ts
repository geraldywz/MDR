import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoSummary } from '../models';
import { TodoService } from '../services/todo.service';


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {
  summary: TodoSummary[] = [];

  constructor(private todoSvc: TodoService, private router: Router) {}

  ngOnInit(): void {
    this.todoSvc.getTodoSummary().then((t) => (this.summary = t));
    console.log('NgInit');
  }

  reload() {
    this.router.navigate(['/']);
  }
}
