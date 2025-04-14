import {Component, inject} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {NgOptimizedImage} from "@angular/common";
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  private authService: AuthService = inject(AuthService);
    public user = this.authService.user
    public isMenuOpen = false;

    public logOut() {
        this.authService.logout()
    }

}
