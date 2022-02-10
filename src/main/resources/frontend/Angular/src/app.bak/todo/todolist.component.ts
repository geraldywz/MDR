import { Component, OnInit } from '@angular/core';
import { TodoSummary } from '../models';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {
  summary: TodoSummary[] = [];

  constructor(private todoSvc: TodoService) {}

  ngOnInit(): void {
    this.todoSvc.getTodoSummary().then((t) => (this.summary = t));
  }
}
