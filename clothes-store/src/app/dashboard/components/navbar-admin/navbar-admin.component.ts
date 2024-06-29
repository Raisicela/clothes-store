import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { SmallScreenComponent } from './small-screen/small-screen.component';
import { LargeScreenComponent } from './large-screen/large-screen.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

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
    MatToolbarModule,
    SmallScreenComponent,
    LargeScreenComponent,
  ],
  templateUrl: './navbar-admin.component.html',
  styleUrl: './navbar-admin.component.css',
})
export class NavbarAdminComponent {
  public isSmallScreen: boolean = true;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe([Breakpoints.HandsetPortrait, Breakpoints.HandsetLandscape])
      .subscribe((result) => {
        this.isSmallScreen = result.matches;
      });
  }
}
