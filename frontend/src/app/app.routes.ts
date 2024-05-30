import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeadminComponent } from './pages/homeadmin/homeadmin.component';
import { HomepropietarioComponent } from './pages/homepropietario/homepropietario.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ReservasComponent } from './pages/reservas/reservas.component';
export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'home-user',
        component: HomeComponent,
    },
    {
        path: 'home-admin',
        component: HomeadminComponent,
    },
    {
        path: 'home-propietario',
        component: HomepropietarioComponent,
    },
    {
        path: '**',
        component: NotFoundComponent,
    },
    {
        path: 'reservas',
        // loadChildren: () => import('./pages/reservas/reservas.module').then(m => m.ReservasModule),
        component: ReservasComponent,
    }

];
