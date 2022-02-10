import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UpdateComponent } from './components/update.component';
import { TodoComponent } from './components/todo.component';
import { TodoService } from './services/todo.service';
import { TodoGuardService } from './services/todo-guard.service';
import { CloudComponent } from './components/cloud.component';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav/nav.component';
import { TodolistComponent } from './components/todolist.component';
import { NewComponent } from './components/new.component';

@NgModule({
  declarations: [
    AppComponent,
    UpdateComponent,
    TodoComponent,
    CloudComponent,
    NavComponent,
    TodolistComponent,
    NewComponent
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  providers: [TodoService, TodoGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
