import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: '', component: HolaMundoComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
