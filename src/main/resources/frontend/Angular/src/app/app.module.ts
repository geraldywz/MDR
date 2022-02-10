import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { TodoComponent } from './todo/todo.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoService } from './services/todo.service';
import { TodolistComponent } from './todo/todolist.component';
import { TodoMainComponent } from './todo/todo-main.component';
import { TodoGuardService } from './services/todo-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TodoComponent,
    CartComponent,
    TodolistComponent,
    TodoMainComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [TodoService, TodoGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
