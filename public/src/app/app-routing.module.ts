import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { EditComponentComponent } from './edit-component/edit-component.component';
import { AddComponentComponent } from './add-component/add-component.component';

const routes: Routes = [
  { path: 'home', component: HomeComponentComponent },
  { path: 'edit/:id', component: EditComponentComponent },
  { path: 'add', component: AddComponentComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
