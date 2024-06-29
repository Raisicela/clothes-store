import { Component } from '@angular/core';
import { NavbarAdminComponent } from '../../components/navbar-admin/navbar-admin.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [NavbarAdminComponent, RouterModule],
  templateUrl: './dashboard-layout.component.html',
  styles: `
  #sidebar {
  height: 100vh;
  width: 250px;
  background-color: rgba(255, 154, 61, 1)
}
  `,
})
export class DashboardLayoutComponent {}
