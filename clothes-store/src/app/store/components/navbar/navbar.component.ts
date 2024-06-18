import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

interface MenuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'store-navbar',
  standalone: true,
  imports: [
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(private authService: AuthService, private router: Router) {}

  public reactiveMenu: MenuItem[] = [
    { title: 'Home', route: '/store/home' },
    { title: 'Categories', route: '/store/categories' },
    { title: 'Products', route: '/store/products' },
    { title: 'Cart', route: '/store/cart' },
  ];

  onLogOut() {
    this.authService.logOut();
    this.router.navigate(['auth/login']);
  }
}
