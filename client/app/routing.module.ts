import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CatsComponent } from './cats/cats.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountComponent } from './account/account.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppsMainComponent } from './shared/apps-main/apps-main.component';
import { AppsDetailComponent } from './shared/apps-detail/apps-detail.component';
import { AppListComponent } from './app-list/app-list.component';
import { AppDashComponent } from './app-dash/app-dash.component';

import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'cats', component: CatsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'account', component: AccountComponent, canActivate: [AuthGuardLogin] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuardAdmin] },
  { path: 'notfound', component: NotFoundComponent },
  { path: 'apps', component: AppsMainComponent,
    children: [
      {
        path: '', 
        component: AppListComponent, 
        pathMatch: 'full'
      }
    ]
  },
  { path: 'apps/:id', component: AppsDetailComponent,
    children: [
      {
        path: '', 
        component: AppDashComponent,
        pathMatch: 'full'
      }
    ]
  },
  { path: 'apps/test/:id', component: AppsDetailComponent,
    children: [
      {
        path: '', 
        component: AppDashComponent,
        pathMatch: 'full'
      }
    ]
  },
  { path: '**', redirectTo: '/notfound' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class RoutingModule {}
