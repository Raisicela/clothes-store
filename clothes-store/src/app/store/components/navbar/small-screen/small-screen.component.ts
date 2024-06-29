import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../../auth/services/auth.service';
import { MenuItem } from '../../../interfaces/menu-item.interface';
import { MatBadgeModule } from '@angular/material/badge';
import { StoreService } from '../../../services/store.service';

@Component({
  selector: 'nav-small-screen',
  standalone: true,
  imports: [
    MatIconModule,
    MatMenuModule,
    RouterModule,
    MatButtonModule,
    CommonModule,
    MatBadgeModule,
  ],
  templateUrl: './small-screen.component.html',
  styleUrl: './small-screen.component.css',
})
export class SmallScreenComponent {
  public countItems = this.storeService.countItems;

  constructor(
    private authService: AuthService,
    private router: Router,
    private storeService: StoreService
  ) {}

  public reactiveMenu: MenuItem[] = [
    { title: 'Home', route: '/store/home' },
    { title: 'Categories', route: '/store/categories' },
    { title: 'Products', route: '/store/products' },
  ];

  onLogOut() {
    this.authService.logOut();
    this.router.navigate(['auth/login']);
  }
}
