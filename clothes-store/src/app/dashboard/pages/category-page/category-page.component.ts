import { Component, Input, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DashboardService } from '../../services/dashboard.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category-page',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.css',
})
export class CategoryPageComponent {
  public categories = this._dashboardService.categories;

  constructor(private _dashboardService: DashboardService) {}

  deleteCategory(id: string) {
    Swal.fire({
      title: 'Do you want to delete the category?',
      showDenyButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: `Cancel`,
    }).then((result) => {
      if (result.isConfirmed) {
        this._dashboardService.deleteCategoryById(id);
        Swal.fire('The category was successfully removed!', '', 'success');
      } else if (result.isDenied) {
        Swal.fire('The category was not removed', '', 'info');
      }
    });
  }
}
