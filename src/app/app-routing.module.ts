import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TemplateComponent } from './template/template.component';
import {NotFoundComponent} from './shared/not-found/not-found.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'pages',
    component: TemplateComponent,
    children: [
      {
        path: 'administration',
        loadChildren: './pages/administration/administration.module#AdministrationModule'
      },
      {
        path: 'academic',
        loadChildren: './pages/academic/academic.module#AcademicModule'
      },
      {
        path: 'shop',
        loadChildren: './pages/shop/shop.module#ShopModule'
      },
      {
        path: 'estudiantes',
        loadChildren: './pages/estudiantes/estudiantes.module#EstudiantesModule'
      }
    ]
  },
  // TODO en esta seccion se utiliza el comodin ** para indicar el componente que sera mostrado si se ingresa una ruta equivoca.
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
