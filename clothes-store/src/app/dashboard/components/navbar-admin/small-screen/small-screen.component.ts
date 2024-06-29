import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../../auth/services/auth.service';
import { MenuItem } from '../../../../store/interfaces/menu-item.interface';

@Component({
  selector: 'nav-small-screen',
  standalone: true,
  imports: [
    MatIconModule,
    MatMenuModule,
    RouterModule,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './small-screen.component.html',
  styleUrl: './small-screen.component.css',
})
export class SmallScreenComponent {
  constructor(private authService: AuthService, private router: Router) {}

  public reactiveMenu: MenuItem[] = [
    { title: 'Categories', route: '/dashboard/categories' },
    { title: 'Products', route: '/dashboard/products' },
    { title: 'Orders', route: '/dashboard/orders' },
  ];

  onLogOut() {
    this.authService.logOut();
    this.router.navigate(['auth/login']);
  }
}
