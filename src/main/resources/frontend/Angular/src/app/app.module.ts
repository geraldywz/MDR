import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UpdateComponent } from './components/update.component';
import { TodoComponent } from './components/todo.component';
import { TodoService } from './services/todo.service';
import { TodoGuardService } from './services/todo-guard.service';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav/nav.component';
import { TodolistComponent } from './components/todolist.component';
import { NewComponent } from './components/new.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UpdateComponent,
    TodoComponent,
    NavComponent,
    TodolistComponent,
    NewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [TodoService, TodoGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
