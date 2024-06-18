import { Component } from '@angular/core';
import { NavbarAdminComponent } from '../../components/navbarAdmin/navbar-admin.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [NavbarAdminComponent, RouterModule],
  templateUrl: './dashboard-layout.component.html',
  styles: ``,
})
export class DashboardLayoutComponent {}
