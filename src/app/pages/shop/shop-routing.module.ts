import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArticlesComponent} from './articles/articles.component';
import {CategoriesComponent} from './categories/categories.component';

// TODO ROUTING PARA MODULO DE TIENDA
const routes: Routes = [
  {
    path: 'articles',
    component: ArticlesComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
