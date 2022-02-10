import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewComponent } from './components/new.component';
import { UpdateComponent } from './components/update.component';
import { TodoGuardService } from './services/todo-guard.service';

const routes: Routes = [
  { path: '', component: NewComponent },
  {
    path: 'new',
    component: NewComponent,
    canDeactivate: [TodoGuardService],
  },
  {
    path: 'todo/:tid',
    component: UpdateComponent,
    canDeactivate: [TodoGuardService],
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
