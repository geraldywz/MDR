import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { TodoMainComponent } from './todo/todo-main.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path: '', component: TodoMainComponent },
  { path: 'todo', component: TodoMainComponent },
  { path: 'todo/:id', component: TodoMainComponent },
  { path: 'cart', component: CartComponent },
  {
    path: 'heroes',
    component: TodoComponent,
    data: { title: 'Heroes List' },
  },
  { path: '**', redirectTo: '/todo', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
