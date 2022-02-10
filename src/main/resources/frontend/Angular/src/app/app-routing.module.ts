import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CloudComponent } from './components/cloud.component';
import { NewComponent } from './components/new.component';
import { UpdateComponent } from './components/update.component';
import { TodoGuardService } from './services/todo-guard.service';

const routes: Routes = [
  { path: '', component: NewComponent },
  {
    path: 'todo/:tid',
    component: UpdateComponent,
    canDeactivate: [TodoGuardService],
  },
  {
    path: 'new',
    component: NewComponent,
    canDeactivate: [TodoGuardService],
  },
  { path: 'cloud', component: CloudComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
