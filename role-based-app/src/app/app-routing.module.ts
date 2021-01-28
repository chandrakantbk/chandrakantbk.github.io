import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { DemosListComponent } from './demos/demos-list/demos-list.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { UserLayoutComponent } from './user/user-layout/user-layout.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [AuthService],
    children: [
      {
        path: '',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
      },
    ]
  },

  {
    path: 'user',
    component: UserLayoutComponent,
    canActivate: [AuthService],
    children: [
      {
        path: '',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule),
      }
    ]
  },

  {
    path: 'demo',
    component: DemosListComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./demos/demos.module').then((m) => m.DemosModule)
      },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  // { path: '**', redirectTo: 'login', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
