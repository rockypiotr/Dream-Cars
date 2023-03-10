import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth-guard.service';

const appRoutes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./features/about/about.module').then((m) => m.AboutModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'search',
    loadChildren: () =>
      import('./features/auction/auction.module').then((m) => m.AuctionModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'create',
    loadChildren: () =>
      import('./features/create/create.module').then((m) => m.CreateModule),
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: 'about',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
