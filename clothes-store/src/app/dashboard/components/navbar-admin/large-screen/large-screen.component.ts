import { Component } from '@angular/core';
import { AuthService } from '../../../../auth/services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MenuItem } from '../../../../store/interfaces/menu-item.interface';

@Component({
  selector: 'nav-large-screen',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatBadgeModule,
  ],
  templateUrl: './large-screen.component.html',
  styleUrl: './large-screen.component.css',
})
export class LargeScreenComponent {
  constructor(private authService: AuthService, private router: Router) {}

  public reactiveMenu: MenuItem[] = [
    { title: 'Categories', route: '/dashboard/categories' },
    { title: 'Products', route: '/dashboard/products' },
    { title: 'Orders', route: '/dashboard/orders' },
  ];

  public user = this.authService.currentUser()?.name;

  onLogOut() {
    this.authService.logOut();
    this.router.navigate(['auth/login']);
  }
}
