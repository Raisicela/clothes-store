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
  selector: 'dashboard-navbar',
  standalone: true,
  imports: [
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './navbar-admin.component.html',
  styleUrl: './navbar-admin.component.css',
})
export class NavbarAdminComponent {
  constructor(private authService: AuthService, private router: Router) {}

  public reactiveMenu: MenuItem[] = [
    { title: 'Categories', route: '/dashboard/categories' },
    { title: 'Products', route: '/dashboard/products' },
  ];

  onLogOut() {
    this.authService.logOut();
    this.router.navigate(['auth/login']);
  }
}
