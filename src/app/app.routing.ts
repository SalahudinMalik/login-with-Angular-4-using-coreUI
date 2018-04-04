import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Globals } from '../Globals';
// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { LoginComponent } from './login/login.component';
import {SimpleLayoutComponent} from './layouts/simple-layout.component'
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import {DashboardComponent} from './pages/dashboard/dashboard.component'
import {DashboardModule} from './pages/dashboard/dashboard.module'


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages'
    //pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'components',
        loadChildren: './components/components.module#ComponentsModule'
      },
   
    ]
  },
  {
    path: 'pages',
    component: SimpleLayoutComponent,
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: '',
        loadChildren: './pages/pages.module#PagesModule',
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
