import { Component } from '@angular/core';
import { MenuItem } from '../../../interfaces/menu-item.interface';
import { AuthService } from '../../../../auth/services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { StoreService } from '../../../services/store.service';

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
  constructor(
    private authService: AuthService,
    private router: Router,
    private storeService: StoreService
  ) {}

  public countItems = this.storeService.countItems;

  public reactiveMenu: MenuItem[] = [
    { title: 'Home', route: '/store/home' },
    { title: 'Categories', route: '/store/categories' },
    { title: 'Products', route: '/store/products' },
  ];

  public user = this.authService.currentUser()?.name;

  onLogOut() {
    this.authService.logOut();
    this.router.navigate(['auth/login']);
  }
}
