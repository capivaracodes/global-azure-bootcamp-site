import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Gab2019Component } from './layouts/gab2019/gab2019.component';

const routes: Routes = [
  {
    path: '',
    component: Gab2019Component,
    children: [
      { path: '', loadChildren: './components/home/home.module#HomeModule' },
    ],
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
