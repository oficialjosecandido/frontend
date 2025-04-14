import { Routes } from '@angular/router';
import { HomeComponent } from './landing/pages/home/home.component';
import { AuthGuard } from './core/guards/auth/auth.guard';
import { LoginComponent } from './core/components/login/login.component';

export const routes: Routes = [
    { path: "", component: HomeComponent, canActivate: [AuthGuard] },
    { path: "login", component: LoginComponent },
];
