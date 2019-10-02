import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RolesComponent } from './roles/roles.component';
import { UsersComponent } from './users/users.component';
import {PermissionsComponent} from './permissions/permissions.component';


const routes: Routes = [
  {
    path: 'roles',
    component: RolesComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'permissions',
    component: PermissionsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
