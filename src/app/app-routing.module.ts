import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{                                       // add
  path: '',                                                   // add
  loadChildren: 'app/home/home.module#HomeModule'             // add
}, {                                                            // add
  path: 'about',                                              // add
  loadChildren: 'app/about/about.module#AboutModule'          // add
}, {                                                            // add
  path: 'todo',                                               // add
  loadChildren: 'app/todo-app/todo-app.module#TodoAppModule'  // add
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
