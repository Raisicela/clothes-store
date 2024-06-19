import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';

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
    MatToolbarModule,
    MatSidenavModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  public isSmallScreen: boolean = true;

  constructor(
    private authService: AuthService,
    private router: Router,
    private breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.HandsetPortrait, Breakpoints.HandsetLandscape])
      .subscribe((result) => {
        this.isSmallScreen = result.matches;
      });
  }

  public user = this.authService.currentUser()?.name;

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
